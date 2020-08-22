import React, { useState, useEffect, useContext } from 'react'
import classnames from 'classnames'
import { RadioProps } from './Props'
import RadioGroup from './Group'
import RadioCtx from './RadioContext'
import './style/index.scss'

function Radio<T>(props: RadioProps<T>) {
  const { checked, value, disabled, children, onChange } = props
  const [active, setActive] = useState(false)

  const { GROUPVALUE, disabledGroup, updateGroup } = useContext(RadioCtx)

  useEffect(() => {
    setActive(checked === value || value === GROUPVALUE)
  }, [checked, value, GROUPVALUE])

  const onClick = () => {
    if (disabled || disabledGroup) {
      return
    }
    if (!active && onChange) {
      onChange(value as T)
    }
    if (!active) {
      updateGroup(value)
    }
  }

  return (
    <div
      className={classnames('are-radio', {
        'are-radio--checked': active,
        'are-radio--disabled': disabled || disabledGroup,
      })}
      tabIndex={0}
      role="radio"
      aria-checked={active}
      aria-disabled={disabled || disabledGroup}
      onClick={onClick}
      onKeyPress={() => {}}
    >
      <span className="are-radio__icon" />
      {children ? <span className="are-radio__label">{children}</span> : null}
    </div>
  )
}

Radio.Group = RadioGroup

Radio.defaultProps = {
  value: true,
} as RadioProps<boolean>

export default Radio
