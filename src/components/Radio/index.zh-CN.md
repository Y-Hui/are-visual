## Radio 单选按钮

### 基础用法

```tsx
import React, { useState } from 'react'
import { Radio, Button } from 'are-visual'

export default () => {
  const [val, setVal] = useState(1)
  return (
    <>
      <Radio
        value={1}
        checked={val}
        onChange={(v) => {
          setVal(v)
        }}
      >
        单选按钮
      </Radio>
      <Radio
        value={2}
        checked={val}
        onChange={(v) => {
          setVal(v)
        }}
      >
        单选按钮
      </Radio>
    </>
  )
}
```

### 禁用

```tsx
import React from 'react'
import { Radio } from 'are-visual'

export default () => {
  return (
    <>
      <Radio checked disabled>
        选中且禁用
      </Radio>
      <Radio disabled>禁用</Radio>
    </>
  )
}
```

### 单选按钮组

```tsx
import React, { useState } from 'react'
import { Radio } from 'are-visual'

export default () => {
  const [val, setVal] = useState(0)
  return (
    <>
      <Radio.Group
        value={val}
        onChange={(v) => {
          setVal(v)
        }}
      >
        <Radio value={0}>零</Radio>
        <Radio value={1}>壹</Radio>
        <Radio value={2}>贰</Radio>
        <Radio value={3}>叁</Radio>
      </Radio.Group>
    </>
  )
}
```

### API

#### Radio API

| 属性     | 描述                            | 类型                             | 默认值  |
| -------- | ------------------------------- | -------------------------------- | ------- |
| checked  | 是否选中                        | `boolean`\| `number` \| `string` | `false` |
| disabled | 禁用该选项                      | `boolean`                        | `false` |
| value    | 对比 `value` 值是否选中当前选项 | `boolean`\| `number` \| `string` | `true`  |
| onChange | **选中**单选按钮时触发回调      | `(value) => void`                | -       |

#### Radio.Group API

| 属性     | 描述                       | 类型                             | 默认值  |
| -------- | -------------------------- | -------------------------------- | ------- |
| value    | 当前选择的单选按钮值       | `boolean`\| `number` \| `string` | -       |
| disabled | 禁用整组选项               | `boolean`                        | `false` |
| onChange | **选中**单选按钮时触发回调 | `(value) => void`                | -       |
