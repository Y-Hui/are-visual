export interface ModalWrapperProps {
  /** 点击蒙层可关闭 */
  maskClosable?: boolean
  /** 按下 ESC 按钮关闭 Modal。默认为 true */
  escClosable?: boolean
  /** 层级，默认为 1 */
  zIndex?: number
}
