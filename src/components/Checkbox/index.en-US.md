---
order: 1
---

## Checkbox

### Basic usage

```tsx
import React, { useState } from 'react'
import { Checkbox } from 'are-visual'

export default () => {
  const [check, setCheck] = useState(true)
  const [check2, setCheck2] = useState(false)
  return (
    <>
      <Checkbox
        checked={check}
        onChange={(v) => {
          setCheck(v)
        }}
      >
        Checkbox
      </Checkbox>
      <Checkbox
        checked={check2}
        onChange={(v) => {
          setCheck2(v)
        }}
      >
        Checkbox
      </Checkbox>
      <Checkbox mixin>Mixin</Checkbox>
    </>
  )
}
```

### Disabled

```tsx
import React from 'react'
import { Checkbox } from 'are-visual'

export default () => {
  return (
    <>
      <Checkbox checked disabled>
        Disabled
      </Checkbox>
      <Checkbox disabled>Disabled</Checkbox>
    </>
  )
}
```

### Specify values

```tsx
/**
 * desc: You can specify the return value
 */
import React, { useState } from 'react'
import { Checkbox } from 'are-visual'

type AgreeType = 1 | 2

export default () => {
  const [check, setCheck] = useState<AgreeType>(1)

  const onChange = (value: AgreeType) => {
    console.log(value)
    setCheck(value)
  }

  return (
    <>
      <Checkbox values={[1, 2]} checked={check} onChange={onChange}>
        I agree.
      </Checkbox>
      <br />
      <br />
      <p>Value: {check}</p>
    </>
  )
}
```

### Check all

```tsx
/**
 * desc: Use with `Checkbox.Group`.
 */
import React, { useState, useMemo, useEffect } from 'react'
import { Checkbox } from 'are-visual'

type CheckState = 'checked' | 'unchecked' | 'mixin'

export default () => {
  const [fruit, setFruit] = useState([
    {
      value: 'apple',
      label: 'Apple',
    },
    {
      value: 'banana',
      label: 'Banana',
    },
    {
      value: 'grape',
      label: 'Grape',
    },
  ])
  /** Default selection of `apple` */
  const [checkedVal, setCheckedVal] = useState(['apple'])

  const allCheckValue = useMemo(() => fruit.map((item) => item.value), [fruit])

  const [state, setState] = useState<CheckState>('mixin')
  useEffect(() => {
    const checkAll = allCheckValue.every((item) => checkedVal.includes(item))
    if (checkAll) {
      setState('checked')
    } else {
      setState(checkedVal.length === 0 ? 'unchecked' : 'mixin')
    }
  }, [checkedVal, allCheckValue])

  const onChange = (v: string[]) => {
    setCheckedVal(v)
  }

  const onCheckAllChange = () => {
    setCheckedVal(state === 'checked' ? [] : allCheckValue)
  }

  return (
    <>
      <Checkbox
        checked={state === 'checked'}
        mixin={state === 'mixin'}
        onChange={onCheckAllChange}
      >
        Check All
      </Checkbox>

      <Checkbox.Group value={checkedVal} onChange={onChange}>
        {fruit.map((item) => (
          <Checkbox key={item.value} name={item.value}>
            {item.label}
          </Checkbox>
        ))}
      </Checkbox.Group>
      <p>Value: {JSON.stringify(checkedVal)}</p>
    </>
  )
}
```

### API

#### Checkbox API

| Props    | Description                                                                                                                                                                   | Type                                    | Defaults        |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | --------------- |
| checked  | Specifies whether the checkbox is selected.<br/>Although we do not qualify types (for type inference), <br />we recommend using the recommended primitive types on the right. | `boolean` \| `number` \| `string`       | `false`         |
| disabled | disable checkbox                                                                                                                                                              | `boolean`                               | `false`         |
| name     | Used with `Checkbox.Group`<br />Make unique identifiers within `Checkbox.Group`.<br />The original type on the right is recommended                                           | `boolean` \| `number` \| `string`       | -               |
| values   | Set selected and unselected status values.<br />Recommend using the recommended type on the right.                                                                            | `string[]` \| `number[]` \| `boolean[]` | `[true, false]` |
| mixin    | The mixin checked state of checkbox.                                                                                                                                          | `boolean`                               | `false`         |
| onChange | The callback function that is triggered when the state changes.                                                                                                               | `(value) => void`                       | -               |

#### Checkbox.Group API

| Props    | Description                                                     | Type                                    | Defaults |
| -------- | --------------------------------------------------------------- | --------------------------------------- | -------- |
| values   | Used to set this set of selected values.                        | `string[]` \| `number[]` \| `boolean[]` | -        |
| disabled | disable this group.                                             | `boolean`                               | `false`  |
| onChange | The callback function that is triggered when the state changes. | `(value: T[]) => void`                  | -        |
