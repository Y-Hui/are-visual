import { BasicStyle } from '../../@types'

export interface RadioProps<T> {
  /** 是否选中 */
  checked?: T
  /** 是否禁用 */
  disabled?: boolean
  /** 配合 Group 一起使用 */
  value?: T
  children?: React.ReactNode
  /** 修改 checked 的回调函数 */
  onChange?: (value: T) => void
}

export interface RadioGroupProps<T> extends BasicStyle {
  /** 选中值 */
  value?: T
  /** 是否禁用 */
  disabled?: boolean
  children?: React.ReactNode
  /** 修改 checked 的回调函数 */
  onChange?: (value: T) => void
}
