import React from 'react'
import ReactDOM from 'react-dom'
import { ModalProps } from './types/modal'
import Overlay from '../Overlay'
import Modal from './Modal'
import './style/index.scss'

const ModalWrapper: React.FC<ModalProps> = (props) => {
  const {
    className,
    style,
    visible,
    zIndex,
    lazyRender,
    ...overlayProps
  } = props

  return ReactDOM.createPortal(
    <>
      <Modal visible={visible} zIndex={(zIndex || 1) + 1} />
      <Overlay visible={visible} zIndex={zIndex} {...overlayProps} />
    </>,
    document.body,
  )
}

ModalWrapper.defaultProps = {
  visible: false,
  lazyRender: true,
}

export default ModalWrapper
