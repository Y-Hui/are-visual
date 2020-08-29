import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import Animate from 'rc-animate'
import { onKeyBoardEvent, KeyboardEventShape, SPACE } from '../../utils/event'
import Element from '../Element'
import Text from '../Text'
import { ReactComponent as Close } from '../../icons/close.svg'
import { ModalProps } from './types/modal'
import './style/index.scss'

const Modal: React.FC<ModalProps> = (props) => {
  const {
    top,
    visible,
    title,
    footer,
    line,
    className,
    style,
    lazyRender,
    showClose,
    children,
    onClose,
    onClosed,
  } = props

  // lazyRender
  const [isRender, setIsRender] = useState(!lazyRender)

  useEffect(() => {
    if (visible) {
      setIsRender(true)
    }
  }, [visible])

  const handlerClose = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <Animate
      className="are-modal-wrapper"
      transitionName="are-zoom"
      showProp="isShow"
      component="div"
      onEnd={() => {
        if (onClosed && !visible) {
          onClosed()
        }
      }}
    >
      {isRender ? (
        <Element
          key="modal-node"
          className={classnames('are-modal', className)}
          role="presentation"
          isShow={visible}
          elevation={2}
          onClick={(e: MouseEvent) => {
            e.stopPropagation()
          }}
          style={{
            top,
            ...style,
          }}
        >
          <Element
            className="are-modal__close"
            role="button"
            aria-label="close"
            tag="span"
            tabIndex={0}
            isRender={showClose}
            onClick={handlerClose}
            onKeyPress={(e: KeyboardEventShape<HTMLSpanElement>) =>
              onKeyBoardEvent(e, SPACE, handlerClose)
            }
          >
            <Close fill="currentColor" />
          </Element>
          <Element
            className={classnames('are-modal__header', {
              'are-modal__header--line': line,
            })}
            isRender={Boolean(title)}
          >
            {typeof title === 'string' ? (
              <Text tag="h3" lineHeight="1" level={5}>
                {title}
              </Text>
            ) : (
              title
            )}
          </Element>
          <section className="are-modal__body">{children}</section>
          {footer ? (
            <footer
              className={classnames('are-modal__footer', {
                'are-modal__footer--line': line,
              })}
            >
              {footer}
            </footer>
          ) : null}
        </Element>
      ) : null}
    </Animate>
  )
}

Modal.defaultProps = {
  visible: false,
  lazyRender: true,
  showClose: true,
  line: false,
}

export default Modal
