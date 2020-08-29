import { BasicStyle } from '../../../@types/index'

/** Modal 组件 Props */
export interface ModalProps extends BasicStyle {
  /** 是否显示 */
  visible?: boolean
  /** 距离顶部的位置，默认为 20% */
  top?: string | number
  /** 标题内容 */
  title?: React.ReactNode
  /** 显示 header 和 footer 的分割线 */
  line?: boolean
  /** 显示右上角关闭按钮。默认为 `true` */
  showClose?: boolean
  /** Modal 页脚按钮。默认右对齐。 */
  footer?: React.ReactNode
  /** 懒渲染 */
  lazyRender?: boolean
  /**
   * 渲染位置
   * @private 内部使用
   */
  container?: HTMLElement
  /** 关闭回调函数。 按下 ESC、右上角关闭按钮都会触发 */
  onClose?: () => void
  /** 关闭后的回调 */
  onClosed?: () => void
}
