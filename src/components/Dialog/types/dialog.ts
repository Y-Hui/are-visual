import { ButtonProps } from '../../Button/Props'

export interface DialogProps {
  /** 是否显示 */
  visible: boolean
  /** 距离顶部的位置，默认为 20% */
  top?: string | number
  /** 标题内容 */
  title?: React.ReactNode
  /** Dialog 内容 */
  content?: React.ReactNode
  /** Dialog 页脚按钮。默认右对齐。 */
  footer?: React.ReactNode
  /** 确定按钮文本 */
  confirmText?: string
  /** 取消按钮文本 */
  cancelText?: string
  /** 显示关闭按钮 */
  showClose?: boolean
  /** 点击蒙版可关闭 */
  maskClosable?: boolean
  /** 关闭时的回调函数 */
  onClose?: () => void
  /** 关闭后的回调函数 */
  onClosed: () => void
  /** 层级 */
  zIndex?: number
  /** 取消按钮事件 */
  onCancel?: () => void
  /** 确认按钮事件 */
  onConfirm?: () => PromiseLike<any> | void
  /** 取消按钮 Props */
  cancelButtonProps?: ButtonProps
  /** 确认按钮 Props */
  confirmButtonProps?: ButtonProps
  /** 渲染地址 */
  container?: HTMLElement
}
