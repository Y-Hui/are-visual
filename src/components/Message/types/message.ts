import { BasicStyle } from '../../../@types/index'

/** Message 组件 Props */
export interface MessageProps extends BasicStyle {
  /** 提示消息类型 */
  type?: 'normal' | 'warn' | 'error' | 'success'
  /** 显示关闭按钮 */
  showClose?: boolean
  /** 加载状态 */
  loading?: boolean
  /** 关闭提示消息时的回调函数 */
  onClose?: () => void
}
