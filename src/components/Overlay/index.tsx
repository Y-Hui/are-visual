import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import Animate from 'rc-animate'
import { OverlayProps } from './types/overlay'
import './style/index.scss'

const Overlay: React.FC<OverlayProps> = (props) => {
  const {
    className,
    style,
    visible,
    zIndex,
    children,
    container,
    onClose,
  } = props
  const [isRender, setIsRender] = useState(false)

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
      setIsRender(true)
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [visible])

  const mask = (
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

  const node = (
    <Animate component="" showProp="data-visible" transitionName="are-fade">
      {isRender ? mask : null}
    </Animate>
  )

  return container ? ReactDOM.createPortal(node, container) : node
}

Overlay.defaultProps = {
  visible: false,
}
export { OverlayProps }
export default Overlay
