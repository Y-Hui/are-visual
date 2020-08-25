import { MessageProps } from './message'
import { MessageIdType, AddMessageParams, CloseMessageFunc } from './index'

/** MessageStore 组件 */
export interface MessageStoreProps {
  /** 渲染目标 DOM 节点 */
  holder?: HTMLElement
}

/** 保存在 Store 中的提示消息类型  */
export interface MessageState extends MessageProps {
  /** 提示消息唯一 key */
  id?: MessageIdType
  /** 提示消息内容 */
  content: React.ReactNode
  /**
   * @private clear timeoutId
   * 内部使用，记录定时器 id
   */
  timer?: NodeJS.Timeout | number
  /**
   * @private resolve
   * 内部使用，promise 成功回调
   */
  resolve?: <T>(value?: T | PromiseLike<T>) => void
}

export interface MessageStoreRef {
  add: (value: AddMessageParams) => CloseMessageFunc
  clear: () => void
}
