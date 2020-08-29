import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ModalProps } from './types/modal'
import { ModalWrapperProps } from './types/wrapper'
import Overlay from '../Overlay'
import Modal from './Modal'
import { ESC } from '../../utils/event'
import './style/index.scss'

const ModalWrapper: React.FC<ModalWrapperProps & ModalProps> = (props) => {
  const {
    visible,
    zIndex,
    lazyRender,
    children,
    container,
    maskClosable,
    escClosable,
    onClose,
    ...other
  } = props

  /** ESC 关闭 Modal */
  useEffect(() => {
    const onKeyPressEsc = (e: globalThis.KeyboardEvent) => {
      if (e.keyCode === ESC && onClose) {
        onClose()
      }
    }
    if (escClosable) {
      document.addEventListener('keydown', onKeyPressEsc)
    }
    return () => {
      document.removeEventListener('keydown', onKeyPressEsc)
    }
  }, [escClosable, onClose])

  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        zIndex: typeof zIndex === 'number' ? zIndex : 1,
      }}
    >
      <Modal
        visible={visible}
        lazyRender={lazyRender}
        onClose={onClose}
        {...other}
      >
        {children}
      </Modal>
      <Overlay visible={visible} onClose={maskClosable ? onClose : undefined} />
    </div>,
    container || document.body,
  )
}

ModalWrapper.defaultProps = {
  visible: false,
  lazyRender: true,
  maskClosable: true,
  escClosable: true,
}
export { ModalProps }
export default ModalWrapper
