## Button 按钮

### 概览

在 Are Vision 中提供了以下按钮样式：

- 默认按钮
- 主按钮
- 框线按钮
- 文字按钮

还有以下四种状态属性：

- 幽灵
- 禁用
- 加载中
- 危险

### 样式类型 Type

```tsx
import React from 'react'
import { Button } from 'are-vision'

export default () => {
  return (
    <>
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="plain">框线按钮</Button>
      <Button type="text">文字按钮</Button>
    </>
  )
}
```

### 按钮形状 Shape

```tsx
/**
 * title: 按钮形状
 * desc: 它只控制按钮的形状，不参与其他样式的控制。
 */
import React from 'react'
import { Button } from 'are-vision'

export default () => (
  <>
    <Button shape="circle">A</Button>
    <Button shape="round">胶囊按钮</Button>
    <Button type="primary" shape="circle">
      A
    </Button>
    <Button type="primary" shape="round">
      胶囊按钮
    </Button>
  </>
)
```

### 幽灵按钮 Ghost

```tsx
/**
 * background: '#afafaf'
 */
import React from 'react'
import { Button } from 'are-vision'

export default () => (
  <>
    <Button ghost>幽灵按钮</Button>
    <Button type="primary" ghost>
      主要按钮
    </Button>
    <Button ghost danger>
      危险按钮
    </Button>
    <Button ghost disabled>
      禁用幽灵
    </Button>
    <Button ghost shape="round">
      幽灵按钮
    </Button>
    <Button ghost shape="circle">
      A
    </Button>
  </>
)
```

### 按钮尺寸 Size

```tsx
import React from 'react'
import { Button } from 'are-vision'

export default () => {
  return (
    <div>
      <h4>Small:</h4>
      <Button size="small">Default</Button>

      <h4 style={{ marginTop: 30 }}>middle: (default)</h4>
      <Button>Default</Button>

      <h4 style={{ marginTop: 30 }}>large:</h4>
      <Button size="large">Default</Button>
    </div>
  )
}
```

### 禁用按钮 Disabled

```tsx
import React from 'react'
import { Button } from 'are-vision'

export default () => {
  return (
    <>
      <Button disabled>Disabled</Button>
      <Button type="primary" disabled>
        Disabled
      </Button>
      <Button shape="round" disabled>
        Disabled
      </Button>
      <Button shape="circle" disabled>
        A
      </Button>
      <Button type="text" disabled>
        Disabled
      </Button>
    </>
  )
}
```

### 危险按钮 Danger

```tsx
import React from 'react'
import { Button } from 'are-vision'

export default () => (
  <>
    <Button danger>Danger</Button>
    <Button type="primary" danger>
      Danger
    </Button>
    <Button type="text" danger>
      Danger
    </Button>
  </>
)
```

### 独占一行 Block

```tsx
import React from 'react'
import { Button } from 'are-vision'

export default () => (
  <>
    <Button block>独占一行</Button>
  </>
)
```

### 加载中 Loading

```tsx
import React, { useState } from 'react'
import { Button } from 'are-vision'

export default () => {
  const [loading, setLoading] = useState(false)
  const onClick = () => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
      clearTimeout(timer)
    }, 5000)
  }
  return (
    <>
      <Button type="primary" loading>
        Loading...
      </Button>
      <Button type="primary" loading={loading} onClick={onClick}>
        Click Me
      </Button>
      <Button type="primary" shape="circle" loading={loading} onClick={onClick}>
        A
      </Button>
      <Button type="text" loading={loading} onClick={onClick}>
        Danger
      </Button>
    </>
  )
}
```

### API

| 属性       | 描述             | 类型                            | 默认值   |
| ---------- | ---------------- | ------------------------------- | -------- |
| type       | 设置按钮样式类型 | `primary` \| `plain` \| `text`  | -        |
| size       | 设置按钮尺寸     | `large` \| `middle` \| `small`  | `middle` |
| shape      | 设置按钮形状     | `circle` \| `round`             | -        |
| ghost      | 幽灵按钮         | boolean                         | `false`  |
| disabled   | 禁用按钮         | boolean                         | `false`  |
| danger     | 危险按钮         | boolean                         | `false`  |
| nativeType | 设置原始`type`   | `submit` \| `button` \| `reset` | `button` |
| block      | 按钮独占一行     | boolean                         | `false`  |
| loading    | 加载状态         | boolean                         | `false`  |
| onClick    | 点击事件回调     | (event) => void                 | -        |
