import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import Animate from 'rc-animate'
import { ModalProps } from './types/modal'
import './style/index.scss'

const Modal: React.FC<ModalProps> = (props) => {
  const { className, style, visible, zIndex, lazyRender } = props
  // lazyRender
  const [isRender, setIsRender] = useState(!lazyRender)

  useEffect(() => {
    if (visible) {
      setIsRender(true)
    }
  }, [visible])

  return (
    <Animate transitionName="are-zoom" showProp="data-show" component="">
      {isRender ? (
        <div
          key="modal-node"
          className={classnames('are-modal', className)}
          role="presentation"
          data-show={visible}
          onClick={(e) => {
            e.stopPropagation()
          }}
          style={{
            zIndex,
            ...style,
          }}
        />
      ) : null}
    </Animate>
  )
}

Modal.defaultProps = {
  visible: false,
  lazyRender: true,
}

export default Modal
