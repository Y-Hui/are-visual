## Button

### Overview

In Are Vision we provide the following button styles:

- Default Button
- Primary Button
- Plain Button
- Text Button

There are four more state attributes:

- Ghost
- Disabled
- Loading
- Danger

### Type

```tsx
import React from 'react'
import { Button } from 'are-visual'

export default () => {
  return (
    <>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="plain">Plain</Button>
      <Button type="text">Text</Button>
    </>
  )
}
```

### Shape

```tsx
/**
 * title: Button shape
 * desc: It only controls the shape of the button and is not involved in the control of other styles.
 */
import React from 'react'
import { Button } from 'are-visual'

export default () => (
  <>
    <Button shape="circle">A</Button>
    <Button shape="round">Round</Button>
    <Button type="primary" shape="circle">
      A
    </Button>
    <Button type="primary" shape="round">
      Round
    </Button>
  </>
)
```

### Ghost

```tsx
/**
 * background: '#afafaf'
 */
import React from 'react'
import { Button } from 'are-visual'

export default () => (
  <>
    <Button ghost>Ghost</Button>
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button ghost danger>
      Danger
    </Button>
    <Button ghost disabled>
      Disabled
    </Button>
    <Button ghost shape="round">
      Ghost
    </Button>
    <Button ghost shape="circle">
      A
    </Button>
  </>
)
```

### Size

```tsx
import React from 'react'
import { Button } from 'are-visual'

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

### Disabled

```tsx
import React from 'react'
import { Button } from 'are-visual'

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

### Danger

```tsx
import React from 'react'
import { Button } from 'are-visual'

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

### Block

```tsx
import React from 'react'
import { Button } from 'are-visual'

export default () => (
  <>
    <Button block>Block Button</Button>
  </>
)
```

### Loading

```tsx
import React, { useState } from 'react'
import { Button } from 'are-visual'

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
        Loading
      </Button>
    </>
  )
}
```

### API

| Props      | Description                          | Type                            | Defaults |
| ---------- | ------------------------------------ | ------------------------------- | -------- |
| type       | Button style type.                   | `plain` \| `text` \| `ghost`    | -        |
| size       | Set the button size.                 | `large` \| `middle` \| `small`  | `middle` |
| shape      | Set the button shape.                | `circle` \| `round`             | -        |
| ghost      | Ghost button.                        | boolean                         | `false`  |
| disabled   | Disable button.                      | boolean                         | `false`  |
| danger     | Set the danger button.               | boolean                         | `false`  |
| nativeType | Set the button's native type value.  | `submit` \| `button` \| `reset` | `button` |
| block      | Set the width of the button to 100%. | boolean                         | `false`  |
| loading    | Set loading status.                  | boolean                         | `false`  |
| onClick    | Click event callback                 | (event) => void                 | -        |
