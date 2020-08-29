import React, { useState } from 'react'
import Modal from '../Modal'
import Button from '../Button'
import Text from '../Text'
import { DialogProps } from './types/dialog'
import { handlerPromise } from '../../utils/promise'
import './style/index.scss'

const Dialog: React.FC<DialogProps> = (props) => {
  const {
    visible,
    title,
    content,
    zIndex,
    confirmText,
    cancelText,
    footer,
    showClose,
    maskClosable,
    onCancel,
    onConfirm,
    onClose,
    onClosed,
    container,
    cancelButtonProps,
    confirmButtonProps,
  } = props
  const [loading, setLoading] = useState(false)

  const close = () => {
    onClose!()
  }

  const handlerConfirm = () => {
    if (onConfirm) {
      const result = onConfirm()
      handlerPromise(result, () => setLoading(true)).then(
        () => close(),
        () => close(),
      )
    } else {
      close()
    }
  }

  return (
    <Modal
      className="are-dialog"
      visible={visible}
      showClose={showClose}
      maskClosable={maskClosable}
      zIndex={zIndex}
      onClose={close}
      onClosed={() => {
        onClosed()
        setLoading(false)
      }}
      footer={
        footer || [
          cancelText ? (
            <Button
              key="cancel"
              {...cancelButtonProps}
              onClick={() => {
                if (onCancel) {
                  onCancel()
                }
                close()
              }}
            >
              {cancelText}
            </Button>
          ) : null,
          confirmText ? (
            <Button
              key="confirm"
              type="primary"
              {...confirmButtonProps}
              loading={loading}
              onClick={handlerConfirm}
            >
              {confirmText}
            </Button>
          ) : null,
        ]
      }
      container={container}
    >
      <Text className="are-title" tag="h3" level="4" spaceBottom={20} bold>
        {title}
      </Text>
      <Text tag="div" spaceBottom={10} weight={4}>
        {content}
      </Text>
    </Modal>
  )
}

export default Dialog
