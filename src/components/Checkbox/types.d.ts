import { ReactNode } from 'react'
import { BasicStyle } from '@/@types/index'

export interface CheckboxProps<T> {
  /** 是否选中 */
  checked?: T
  /** 是否禁用 */
  disabled?: boolean
  /** 配合 Group 一起使用 */
  name?: T
  /**
   * 已选择、未选择的值
   *
   * [`checked`, `unchecked`]`
   */
  values?: T[]
  /** 混合状态，单纯样式控制 */
  mixin?: boolean
  children?: ReactNode
  /** 修改 checked 的回调函数 */
  onChange?: (value: T) => void
}

export interface CheckboxGroupProps<T> extends BasicStyle {
  value?: T[]
  /** 是否禁用整组 */
  disabled?: boolean
  /** 修改 checked 的回调函数 */
  onChange?: (value: T[]) => void
}
