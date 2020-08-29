import { BasicStyle } from '../../../@types/index'

export interface ElementProps extends BasicStyle {
  /** display none 切换内容。render 的权重大于 show */
  isShow?: boolean
  /** 是否渲染内容。render 的权重大于 show */
  isRender?: boolean
  /** 渲染为指定标签，默认为 div 标签 */
  tag?: string
  /** 独占一行 */
  block?: boolean
  /** 是否使用圆角 */
  radius?: boolean
  /** 海拔高度。决定该元素阴影 */
  elevation?: 0 | 1 | 2 | 3 | 4
  [key: string]: any
}
