import { BasicStyle } from '../../../@types/index'
import { OverlayProps } from '../../Overlay'

/** Modal 组件 Props */
export interface ModalProps extends BasicStyle, OverlayProps {
  /** 懒渲染 */
  lazyRender?: boolean
}
