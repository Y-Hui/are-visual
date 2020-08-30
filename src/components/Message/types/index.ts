import { MessageState } from './store'

/** 提示消息 id 类型 */
export type MessageIdType = number | string

/** 添加新的提示消息需要传递的参数 */
export interface AddMessageParams
  extends Omit<MessageState, 'timer' | 'resolve'> {
  /** Message 显示时长 */
  duration?: number
}

/** 添加一条提示消息的返回值（对应提示消息的关闭函数） */
export type CloseMessageFunc = () => void

/** 别名方法返回值 PromiseLike */
export interface MessageResult extends PromiseLike<unknown> {
  /** 关闭函数 */
  close: () => void
}
