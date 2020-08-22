## Checkbox 复选框

### 基础用法

```tsx
import React, { useState } from 'react'
import { Checkbox } from 'are-vision'

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
        复选框
      </Checkbox>
      <Checkbox
        checked={check2}
        onChange={(v) => {
          setCheck2(v)
        }}
      >
        复选框
      </Checkbox>
      <Checkbox mixin>混合状态</Checkbox>
    </>
  )
}
```

### 禁用状态

```tsx
import React from 'react'
import { Checkbox } from 'are-vision'

export default () => {
  return (
    <>
      <Checkbox checked disabled>
        勾选且禁用
      </Checkbox>
      <Checkbox disabled>未勾选禁用</Checkbox>
    </>
  )
}
```

### 指定值

```tsx
/**
 * desc: 你可以指定**选择、未选择**的返回值
 */
import React, { useState } from 'react'
import { Checkbox } from 'are-vision'

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
        同意用户协议
      </Checkbox>
      <br />
      <br />
      <p>Value: {check}</p>
    </>
  )
}
```

### 全选

```tsx
/**
 * desc: 配合 `Checkbox.Group` 一起使用。此时 `mixin` 混合状态就能派上用场。
 */
import React, { useState, useMemo, useEffect } from 'react'
import { Checkbox } from 'are-vision'

type CheckState = 'checked' | 'unchecked' | 'mixin'

export default () => {
  const [fruit, setFruit] = useState([
    {
      value: 'apple',
      label: '苹果',
    },
    {
      value: 'banana',
      label: '香蕉',
    },
    {
      value: 'grape',
      label: '葡萄',
    },
  ])
  /** 默认选择 `apple` */
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
        全选
      </Checkbox>

      <Checkbox.Group value={checkedVal} onChange={onChange}>
        {fruit.map((item) => (
          <Checkbox key={item.value} name={item.value}>
            {item.label}
          </Checkbox>
        ))}
      </Checkbox.Group>
      <p>已选择：{JSON.stringify(checkedVal)}</p>
    </>
  )
}
```

### API

#### Checkbox API

| Props    | Description                                                                                | Type                                    | Defaults        |
| -------- | ------------------------------------------------------------------------------------------ | --------------------------------------- | --------------- |
| checked  | 是否选中<br/>虽然我们没有限定类型（适用于类型推断） <br />但是建议使用右侧推荐的原始类型。 | `boolean` \| `number` \| `string`       | `false`         |
| disabled | disable checkbox                                                                           | `boolean`                               | `false`         |
| name     | 配合 `Checkbox.Group`一起使用<br />作为选中值和唯一标识符<br />推荐使用右侧的原始类型。    | `boolean` \| `number` \| `string`       | -               |
| values   | 设置选择、未选择的状态值。<br />推荐使用右侧的类型。                                       | `string[]` \| `number[]` \| `boolean[]` | `[true, false]` |
| mixin    | 复选框的混合状态。                                                                         | `boolean`                               | `false`         |
| onChange | The callback function that is triggered when the state changes.                            | `(value) => void`                       | -               |

#### Checkbox.Group API

| Props    | Description          | Type                                    | Defaults |
| -------- | -------------------- | --------------------------------------- | -------- |
| values   | 设置这组选定的数值。 | `string[]` \| `number[]` \| `boolean[]` | -        |
| disabled | disable this group.  | `boolean`                               | `false`  |
| onChange | 修改状态的回调函数。 | `(value: T[]) => void`                  | -        |
