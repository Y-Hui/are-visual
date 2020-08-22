import React, {
  useContext,
  PropsWithChildren,
  useState,
  useEffect,
} from 'react'
import classnames from 'classnames'
import { CheckboxProps } from './Props'
import { ReactComponent as Check } from './assets/check.svg'
import { ReactComponent as Mixin } from './assets/mixin.svg'
import CheckboxGroup from './Group'
import CheckboxCtx, { CheckedContextProps } from './CheckboxContext'
import './style/index.scss'

type Props<T> = PropsWithChildren<CheckboxProps<T>>
function Checkbox<T>(props: Props<T>): JSX.Element {
  const { checked, children, disabled, name, values, mixin, onChange } = props
  // 选中值，未选中值
  const [CHECK, UNCHECK] = values as T[]

  /**
   * GROUPVALUE => Group 存储选中的值
   * updateGroup => Checkbox 调用 onChange 时一顺便更新 group
   */
  const { GROUPVALUE, disabledGroup, updateGroup, removeCheckbox } = useContext<
    CheckedContextProps
  >(CheckboxCtx)

  useEffect(
    () => () => {
      removeCheckbox(name)
    },
    [name, removeCheckbox],
  )

  /**
   * 勾选状态
   */
  const [active, setActive] = useState(false)
  useEffect(() => {
    // checked 等于 `CHECK` 或者 group 中含有改值，勾选状态
    const state = checked === CHECK || GROUPVALUE.includes(name)
    setActive(state)
  }, [name, checked, CHECK, GROUPVALUE])

  const onClick = () => {
    if (disabled || disabledGroup) {
      return
    }
    if (onChange) {
      onChange(checked === CHECK ? UNCHECK : CHECK)
    }

    // Checkbox 在 Group 内部，name 作为唯一标识符
    updateGroup(name)
  }

  // 键盘事件
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    event.preventDefault()
    if (event.charCode === 32) {
      onClick()
    }
  }

  return (
    <div
      className={classnames('are-checkbox', {
        'are-checkbox--checked': active,
        'are-checkbox--disabled': disabled || disabledGroup,
        'are-checkbox--mixin': mixin,
      })}
      role="checkbox"
      aria-checked={active}
      aria-disabled={disabled || disabledGroup}
      tabIndex={disabled || disabledGroup ? -1 : 0}
      onClick={onClick}
      onKeyPress={handleKeyPress}
    >
      <span className="are-checkbox__icon">
        {/* mixin 的优先级要高于 checked */}
        {active && !mixin ? (
          <Check className="are-checkbox__svg" height="58%" />
        ) : null}
        {mixin ? <Mixin className="are-checkbox__svg" width="58%" /> : null}
      </span>
      {children ? (
        <span className="are-checkbox__label">{children}</span>
      ) : null}
    </div>
  )
}

Checkbox.Group = CheckboxGroup

Checkbox.defaultProps = {
  values: [true, false],
} as CheckboxProps<boolean>

export default Checkbox
