import { ReactNode } from 'react'
import { AddMessageParams, MessageResult } from './index'

/** 使用别名方法，提示消息组件 Props */
type MessageAliasProps = Omit<AddMessageParams, 'content' | 'duration'>

type MessageAliasFunc = (
  /** 提示消息内容 */
  content: ReactNode,
  /** 提示消息显示时长 */
  duration?: number,
  /** 提示消息组件 Props */
  props?: MessageAliasProps,
) => MessageResult

/** 提示消息别名函数 */
export interface MessageAliasMethods {
  /** 完整写法 */
  call: (vaue: AddMessageParams) => MessageResult
  /** 普通 Message */
  info: MessageAliasFunc
  /** 警告 Message */
  warn: MessageAliasFunc
  /** 错误 Message */
  err: MessageAliasFunc
  /** 成功 Message */
  success: MessageAliasFunc
  /** 加载状态 */
  loading: MessageAliasFunc
  /** 清空所有的 Message */
  clear: () => MessageAliasMethods
}
