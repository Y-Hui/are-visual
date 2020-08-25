import React, { useState } from 'react'
import classnames from 'classnames'
import Loading from '../Loading'
import { ButtonProps, MouseEvent, MouseHandleEvent } from './Props'
import './style/index.scss'

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    type,
    block,
    shape,
    disabled,
    danger,
    nativeType,
    size,
    children,
    style,
    loading,
    ghost,
    onClick: emitClick,
    onMouseDown: emitMouseDown,
    onMouseUp: emitMouseUp,
    onMouseLeave: emitMouseLeave,
    ...otherProps
  } = props

  const onClick = (e: MouseEvent) => {
    if (!disabled && !loading && emitClick) {
      emitClick(e)
    }
  }

  /** 按钮是否已被按下 */
  const [isPress, setIsPress] = useState(false)
  const onMouseEvent = (
    e: MouseEvent,
    pressState: boolean,
    emitEvent: MouseHandleEvent,
  ) => {
    if (!loading) {
      setIsPress(pressState)
    }
    if (!loading && emitEvent) {
      emitEvent(e)
    }
  }

  return (
    <button
      className={classnames(
        'are-button',
        {
          'are-button--large': size === 'large',
          'are-button--middle': size === 'middle',
          'are-button--small': size === 'small',

          'are-button--primary': type === 'primary',
          'are-button--plain': !ghost && type === 'plain',
          'are-button--text': !ghost && type === 'text',

          'are-button--round': shape === 'round',
          'are-button--circle': shape === 'circle',

          'are-button--block': block,
          'are-button--danger': danger,
          'are-button--readonly': loading,

          'are-button--press': isPress,

          'are-button--ghost': type !== 'text' && ghost,
        },
        className,
      )}
      style={style}
      type={nativeType}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={(e) => onMouseEvent(e, true, emitMouseDown)}
      onMouseUp={(e) => onMouseEvent(e, false, emitMouseUp)}
      onMouseLeave={(e) => onMouseEvent(e, false, emitMouseLeave)}
      {...otherProps}
    >
      {loading ? <Loading className="are-button__loading" /> : null}
      {shape === 'circle' && loading ? null : children}
    </button>
  )
}

Button.defaultProps = {
  size: 'middle',
  nativeType: 'button',
}

export default Button
