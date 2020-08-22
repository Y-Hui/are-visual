import React, {
  useEffect,
  PropsWithChildren,
  useState,
  useCallback,
} from 'react'
import { omit } from '@/utils/common'
import CheckboxCtx from './CheckboxContext'
import { CheckboxGroupProps } from './types'

type Props<T> = PropsWithChildren<CheckboxGroupProps<T>>

type HandlerType = 'add' | 'remove'
function handlerResult<T>(
  target: T[],
  type: HandlerType,
  payload: T | T[],
): T[] {
  const payloadList = Array.isArray(payload) ? payload : [payload]
  switch (type) {
    case 'add': {
      return [...target, ...payloadList]
    }
    case 'remove': {
      return omit(target, payloadList) as T[]
    }
    default:
      throw new Error()
  }
}

function CheckboxGroup<T>({
  value = [],
  disabled,
  className,
  style,
  children,
  onChange,
}: Props<T>): JSX.Element {
  const [values, setValues] = useState(value)

  /**
   * 监听 value 值的变更，及时更新 Checkbox 勾选状态。
   * 例如父组件直接修改 value 值的情况
   */
  useEffect(() => {
    setValues(() => value)
  }, [value])

  /**
   * 触发 `onChange` 事件。
   * `CheckboxGroup` 本身不调用，在 `Checkbox` 调用 `onChange` 时调用
   *
   * Triggers the `onChange` event.
   * `CheckboxGroup` itself is not called, but is called when `Checkbox` calls `onChange`.
   */
  const updateGroupValue = (name: T) => {
    let result = values
    const handlerType = values.includes(name) ? 'remove' : 'add'
    result = handlerResult(values, handlerType, name)

    setValues(() => result)
    if (onChange) {
      onChange(result)
    }
  }

  /**
   * [zh-CN]: DOM 被移除时更新 `value`且触发 `onChange` 函数。
   * [en]: Update `value` and trigger the `onChange` function when the DOM is removed.
   */
  const remove = (name: T) => {
    setValues((_value) => {
      const result = handlerResult(_value, 'remove', name)
      if (onChange) {
        onChange(result)
      }
      return result
    })
  }

  /**
   * 此处的依赖数组为空，它本应该有一个 `onChange` 作为依赖，把函数独立出去
   * 之后，此处的依赖便省去了。我不确定这样做是否正确。但是它能够正常工作。
   *
   * Perhaps the `onChange` in this function is a dependency on the
   * I'm not sure it's the right thing to do.
   */
  const removeCheckbox = useCallback(remove, [])

  const { Provider } = CheckboxCtx
  return (
    <Provider
      value={{
        GROUPVALUE: values,
        disabledGroup: disabled || false,
        updateGroup: updateGroupValue,
        removeCheckbox,
      }}
    >
      <div
        role="group"
        aria-label="checkbox-group"
        className={className}
        style={style}
      >
        {children}
      </div>
    </Provider>
  )
}

export default CheckboxGroup
