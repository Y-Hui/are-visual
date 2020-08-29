import { BasicStyle } from '../../../@types/index'

/** Overlay 组件 Props */
export interface OverlayProps extends BasicStyle {
  /** 是否显示 */
  visible?: boolean
  /** 层级，默认为 1 */
  zIndex?: number
  /** 渲染位置 */
  container?: HTMLElement
  /** 关闭函数 */
  onClose?: () => void
}
