import React from 'react'
import { BasicStyle } from '../../@types'
import { Omit } from '../../utils/type'

type NativeAttr = Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>
export interface ButtonProps extends BasicStyle, NativeAttr {
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

export type MouseEvent = React.MouseEvent<
  HTMLButtonElement,
  globalThis.MouseEvent
>
export type MouseHandleEvent = ((event: MouseEvent) => void) | undefined
