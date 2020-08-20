import { BasicStyle } from '@/@types'
import { Omit } from '@/utils/type'

export interface ButtonProps
  extends BasicStyle,
    Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'> {
  /** 按钮类型 */
  type?: 'primary' | 'text' | 'plain'
  /** 按钮尺寸 */
  size?: 'large' | 'middle' | 'small'
  /**
   * 按钮形状
   *
   * `circle` 圆形
   *
   * `round` 胶囊按钮
   */
  shape?: 'circle' | 'round'
  /** 原生按钮类型 */
  nativeType?: 'submit' | 'button' | 'reset'
  /** 设置按钮宽度 100% */
  block?: boolean
  /** 禁用按钮 */
  disabled?: boolean
  /** 幽灵按钮 */
  ghost?: boolean
  /** 危险按钮 */
  danger?: boolean
  /** 是否加载状态 */
  loading?: boolean
  /** 点击事件 */
  onClick?: React.MouseEventHandler<HTMLElement>
}
