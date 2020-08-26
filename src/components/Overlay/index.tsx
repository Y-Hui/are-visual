import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import Animate from 'rc-animate'
import { OverlayProps } from './types/overlay'
import './style/index.scss'

const renderToBody = (node: React.ReactNode) => {
  return ReactDOM.createPortal(node, document.body)
}

const Overlay: React.FC<OverlayProps> = (props) => {
  const { className, style, visible, zIndex, children, onClose } = props
  const [isRender, setIsRender] = useState(false)

  useEffect(() => {
    const onKeyPressEsc = (e: globalThis.KeyboardEvent) => {
      if (e.keyCode === 27 && onClose) {
        onClose()
      }
    }
    if (visible) {
      document.addEventListener('keydown', onKeyPressEsc)
    }
    return () => {
      document.removeEventListener('keydown', onKeyPressEsc)
    }
  }, [visible, onClose])

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
      setIsRender(true)
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [visible])

  const node = (
    <div
      className={classnames('are-overlay', className)}
      style={{
        zIndex,
        ...style,
      }}
      key={1}
      data-visible={visible}
      role="presentation"
      aria-hidden
      tabIndex={-1}
      onClick={() => {
        if (onClose) {
          onClose()
        }
      }}
    >
      {children}
    </div>
  )

  return renderToBody(
    <Animate component="" showProp="data-visible" transitionName="are-fade">
      {isRender ? node : null}
    </Animate>,
  )
}

Overlay.defaultProps = {
  visible: false,
}
export { OverlayProps }
export default Overlay
