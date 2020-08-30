import React, {
  useReducer,
  Reducer,
  forwardRef,
  RefForwardingComponent,
  useImperativeHandle,
  useCallback,
} from 'react'
import ReactDOM from 'react-dom'
import omit from 'lodash.omit'
import {
  DialogMap,
  ReducerAction,
  DialogWrapperRef,
  DialogWrapperProps,
  DialogIdType,
  DialogAddParams,
} from './types/wrapper'
import Dialog from './Dialog'
import { hasOwn } from '../../utils/common'

const reducer: Reducer<DialogMap, ReducerAction> = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, [action.payload.id]: action.payload }
    case 'update':
      return { ...state, [action.payload.id]: action.payload }
    case 'remove':
      return omit(state, [action.id])
    default:
      return state
  }
}

type DialogWrapperType = RefForwardingComponent<
  DialogWrapperRef,
  DialogWrapperProps
>

const DialogWrapper: DialogWrapperType = ({ holder }, ref) => {
  const [state, dispatch] = useReducer(reducer, {})

  const add = useCallback((val: DialogAddParams) => {
    dispatch({
      type: 'add',
      payload: {
        ...val,
        visible: true,
      },
    })
  }, [])

  const update = useCallback(
    (val: DialogAddParams) => {
      if (!hasOwn(state, val.id)) {
        return
      }
      const item = state[val.id]
      dispatch({
        type: 'update',
        payload: {
          ...item,
          ...val,
        },
      })
    },
    [state],
  )

  const remove = (id: DialogIdType) => {
    if (!hasOwn(state, id)) {
      return
    }
    dispatch({
      type: 'remove',
      id,
    })
  }

  const closeById = useCallback(
    (id: DialogIdType) => {
      if (!hasOwn(state, id)) {
        return
      }
      dispatch({
        type: 'add',
        payload: {
          ...state[id],
          visible: false,
        },
      })
    },
    [state],
  )

  const clearAll = useCallback(() => {
    Object.keys(state).forEach((id) => {
      closeById(id)
    })
  }, [state, closeById])

  useImperativeHandle(
    ref,
    () => ({
      add,
      update,
      clearAll,
      close: closeById,
    }),
    [closeById, clearAll, add, update],
  )

  const render = (
    <>
      {Object.keys(state).map((key) => {
        const { id, visible, onCancel, onClose, ..._props } = state[key]
        return (
          <Dialog
            key={id}
            visible={visible}
            {..._props}
            onCancel={() => {
              if (onCancel) {
                onCancel()
              }
            }}
            onClose={() => {
              closeById(id)
              if (onClose) {
                onClose()
              }
            }}
            onClosed={() => {
              remove(id)
            }}
            container={holder}
          />
        )
      })}
    </>
  )

  return holder ? ReactDOM.createPortal(render, holder) : render
}

export default forwardRef(DialogWrapper)
