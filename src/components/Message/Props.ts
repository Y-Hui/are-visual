import { Omit } from '../../utils/type'
import { BasicStyle } from '../../@types/index'

/** Message 组件 Props */
export interface MessageProps extends BasicStyle {
  /** Message 类型 */
  type?: 'normal' | 'warn' | 'error' | 'success'
  /** 显示关闭按钮 */
  showClose?: boolean
  /** 加载状态 */
  loading?: boolean
  /** 关闭 Message 的回调函数 */
  onClose?: () => void
}

export interface MessageStoreProps {
  holder?: HTMLElement
}

export type MessageId = number | string
/** Store 中的 Message  */
export interface MessageState extends MessageProps {
  /** Message 唯一 key */
  id?: MessageId
  /** Message 内容 */
  content: React.ReactNode
  /**
   * @private clear timeoutId
   * 内部使用，记录定时器 id
   */
  timer?: NodeJS.Timeout | number
}

/** 添加新的 Message 的参数 */
export interface AddNoticeParams extends Omit<MessageState, 'timer'> {
  /** Message 显示时长 */
  duration?: number
}

export interface MessageCall {
  add: (value: AddNoticeParams) => () => void
  clear: () => void
}

type MessageAliasProps = Omit<AddNoticeParams, 'content' | 'duration'>
export type CloseMessageFunc = () => void
type MessageAlias = (
  /** Message 内容 */
  content: React.ReactNode,
  /** Message 显示时长 */
  duration?: number,
  /** Message 组件 Props */
  props?: MessageAliasProps,
) => CloseMessageFunc

export interface MessageMethods {
  /** 完整写法 */
  call: (vaue: AddNoticeParams) => CloseMessageFunc
  /** 普通 Message */
  info: MessageAlias
  /** 警告 Message */
  warn: MessageAlias
  /** 错误 Message */
  err: MessageAlias
  /** 成功 Message */
  success: MessageAlias
  /** 加载状态 */
  loading: MessageAlias
  /** 清空所有的 Message */
  clearAll: () => MessageMethods
}

type f = keyof AddNoticeParams
