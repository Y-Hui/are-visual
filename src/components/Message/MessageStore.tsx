import React, {
  useReducer,
  forwardRef,
  useCallback,
  useImperativeHandle,
  Reducer,
  RefForwardingComponent,
} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { createPortal } from 'react-dom'
import Message from './Message'
import {
  MessageStoreProps,
  MessageState,
  MessageCall,
  AddNoticeParams,
  CloseMessageFunc,
  MessageId,
} from './Props'
import { generateId } from './utils/id'

interface HandlerTimeoutProps {
  /** 回调函数 */
  callback: (timer?: NodeJS.Timeout) => void
  /** Message id */
  id: MessageId
  /** 显示时长 */
  duration?: number
}

type StoreState = MessageState[]
interface StoreAction {
  type: 'add' | 'replace' | 'remove' | 'clear'
  payload?: MessageState
  removeKey?: string
  replaceIndex?: string | number
}
const reducer: Reducer<StoreState, StoreAction> = (state, actions) => {
  const { type, payload } = actions
  switch (type) {
    case 'add': {
      if (!payload) {
        return state
      }
      return [...state, payload] as StoreState
    }
    case 'replace': {
      if (!payload) {
        return state
      }
      const _state = state.slice(0)
      const index = actions.replaceIndex as MessageId
      _state.splice(Number(index), 1, payload)

      return _state
    }
    case 'remove': {
      return state.filter((item) => item.id !== actions.removeKey)
    }
    case 'clear': {
      state.forEach((item) => clearTimeout(item.timer as number))
      return []
    }
    default:
      return state
  }
}

const MessageStore: RefForwardingComponent<MessageCall, MessageStoreProps> = (
  props,
  ref,
) => {
  const { holder } = props
  const [store, dispatch] = useReducer(reducer, [])

  /** 删除一条 Message */
  const remove = useCallback((key) => {
    dispatch({
      type: 'remove',
      removeKey: key,
    })
  }, [])

  /** 处理关闭事件 */
  const handlerTimeout = useCallback(
    (params: HandlerTimeoutProps): CloseMessageFunc => {
      const { callback, id, duration } = params
      // timeout 为 0 时，不自动关闭
      if (duration !== 0) {
        const timer = setTimeout(() => {
          remove(id)
          clearTimeout(timer)
        }, duration || 3000)
        callback(timer)
      } else {
        callback()
      }
      return () => {
        remove(id)
      }
    },
    [remove],
  )

  /** 添加一条 Message */
  const add = useCallback(
    (value: AddNoticeParams): CloseMessageFunc => {
      const { duration, id } = value
      const key = generateId(id)
      return handlerTimeout({
        callback: (timer) => {
          dispatch({
            type: 'add',
            payload: {
              id: key,
              timer,
              ...value,
            },
          })
        },
        id: key as MessageId,
        duration,
      })
    },
    [handlerTimeout],
  )

  /** 更新 Message */
  const update = useCallback(
    (index: number, value: AddNoticeParams): CloseMessageFunc => {
      return handlerTimeout({
        callback: (timer) => {
          dispatch({
            type: 'replace',
            replaceIndex: index,
            payload: {
              timer,
              id: value.id,
              ...value,
            },
          })
        },
        id: value.id as MessageId,
        duration: value.duration,
      })
    },
    [handlerTimeout],
  )

  /** 清空所有的 Message */
  const clear = useCallback(() => {
    dispatch({
      type: 'clear',
    })
  }, [])

  const handlerAdd = useCallback(
    (value: AddNoticeParams): CloseMessageFunc => {
      if ('id' in value) {
        const index = store.findIndex((item) => item.id === value.id)
        if (index !== -1) {
          /** 更新 Message 时，清理原来的定时器 */
          const { timer } = store[index]
          clearTimeout(timer as number)
          return update(index, value)
        }
        return add(value)
      }
      return add(value)
    },
    [add, update, store],
  )

  /** ref 转发。核心代码 */
  useImperativeHandle(
    ref,
    () => ({
      add: handlerAdd,
      clear,
    }),
    [handlerAdd, clear],
  )

  const render = () => (
    <TransitionGroup component={null}>
      {store.map((item) => {
        const { id, content, onClose, ..._props } = item
        return (
          <CSSTransition
            in
            classNames="are-message"
            key={id}
            timeout={200}
            onExited={() => {
              if (onClose) {
                onClose()
              }
            }}
          >
            <Message
              onClose={() => {
                remove(item.id)
              }}
              {..._props}
            >
              {content}
            </Message>
          </CSSTransition>
        )
      })}
    </TransitionGroup>
  )

  if (holder) {
    return createPortal(render(), holder)
  }

  return render()
}

export default forwardRef(MessageStore)
