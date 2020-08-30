import React, { useCallback, useState, useEffect } from 'react'
import classnames from 'classnames'
import { RadioGroupProps } from './Props'
import RadioCtx from './RadioContext'

export default function RadioGroup<T>(props: RadioGroupProps<T>) {
  const {
    className,
    disabled = false,
    value = undefined,
    style,
    children,
    onChange,
  } = props

  const [state, setState] = useState(value)
  useEffect(() => {
    setState(() => value)
  }, [value])

  // 此处不直接修改 state，而是使其成为受控组件
  const onUpdate = (itemValue: T) => {
    if (onChange) {
      onChange(itemValue)
    }
  }

  const dispatch = useCallback(onUpdate, [])

  return (
    <RadioCtx.Provider
      value={{
        GROUPVALUE: state,
        disabledGroup: disabled,
        updateGroup: dispatch,
      }}
    >
      <div
        className={classnames('are-radio-group', className)}
        style={style}
        role="group"
      >
        {children}
      </div>
    </RadioCtx.Provider>
  )
}
