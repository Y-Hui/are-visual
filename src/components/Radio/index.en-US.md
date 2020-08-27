## Radio

### Basic usage

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
        Radio
      </Radio>
      <Radio
        value={2}
        checked={val}
        onChange={(v) => {
          setVal(v)
        }}
      >
        Radio
      </Radio>
    </>
  )
}
```

### Disabled

```tsx
import React from 'react'
import { Radio } from 'are-visual'

export default () => {
  return (
    <>
      <Radio checked disabled>
        Radio
      </Radio>
      <Radio disabled>Radio</Radio>
    </>
  )
}
```

### Group

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
        <Radio value={0}>Zero</Radio>
        <Radio value={1}>One</Radio>
        <Radio value={2}>Two</Radio>
        <Radio value={3}>Three</Radio>
      </Radio.Group>
    </>
  )
}
```

### API

#### Radio API

| Props    | Description                                                 | Type                             | Defaults |
| -------- | ----------------------------------------------------------- | -------------------------------- | -------- |
| checked  | Whether selected.                                           | `boolean`\| `number` \| `string` | `false`  |
| disabled | Disable radio                                               | `boolean`                        | `false`  |
| value    | Compare according to value and determine if it is selected. | `boolean`\| `number` \| `string` | `true`   |
| onChange | Callback Functions for Checked Radio Buttons                | `(value) => void`                | -        |

#### Radio.Group API

| Props    | Description                                       | Type                             | Defaults |
| -------- | ------------------------------------------------- | -------------------------------- | -------- |
| value    | The value of the currently selected radio button. | `boolean`\| `number` \| `string` | -        |
| disabled | Disable the entire set of radio buttons.          | `boolean`                        | `false`  |
| onChange | Callback Functions for Checked Radio Buttons      | `(value) => void`                | -        |
