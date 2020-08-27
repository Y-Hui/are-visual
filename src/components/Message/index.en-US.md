## Message

### Basic usage

<code src="./demo/basic.tsx" />

### Message Type (Alias function)

<code src="./demo/type.tsx" />

### Duration

By default, messages are displayed for `3000` milliseconds. You can change the duration by passing a second parameter, which is always displayed if the value is `0`.

<code src="./demo/duration.tsx" />

### Clear messages

Note: The `clearAll` method clears the prompt for the context of the current function.

<code src="./demo/clear.tsx" />

### Loading and update

Specify `id` for updating

<code src="./demo/loading.tsx" />

### Relevant context

You can create a context to interrelate with your `Provider` through `useMessage` hooks!

<code src="./demo/context.tsx" />

### Configuring with object forms

<code src="./demo/call.tsx" />

### Chain call

<code src="./demo/chain-call.tsx" />

### Alias function usage and parameters:

- `message.info(content, [duration], [props])`

- `message.warn(content, [duration], [props])`

- `message.err(content, [duration], [props])`

- `message.success(content, [duration], [props])`

The return value of each alias function contains a function that closes the **current prompt message**.

```ts
import { message } from 'are-visual'

const { close } = message.info('Info Message')

// This `close` is the function that closes this message.
```

<br/>

**Note: Once the message function of `Chain Call` is used, the `close` function is not supported.**

```ts
import { message } from 'are-visual'

// Error: Ths close is undefined
const { close } = message.info('Info Message', 0).then(() => {
  console.log('Callback')
})
```

Each alias function inherits a `PromiseLike` type for its return type, and calls to the `then` function return a true `Promise`, this is how `Are` implements chain calls. When the `then` function is called, there is no such `close` function left in the return value. So the `Chain call` and the `close` function can only be one or the other, not both.

#### Props

| Props     | Description                                                             | Required or not | Type                                                          | Defaults |
| --------- | ----------------------------------------------------------------------- | --------------- | ------------------------------------------------------------- | -------- |
| id        | `Message` Unique ID.                                                    |                 | `number` \| `string`                                          |          |
| type      | `Message` style type.                                                   |                 | `normal` \| `primary` \| `warn` \|<br /> `error` \| `success` | `normal` |
| content   | message content                                                         | YES             | `ReactNode`                                                   |          |
| duration  | Display duration (ms)<br />If the value is `0`, it is always displayed. |                 | `number`                                                      | `3000`   |
| showClose | Show close button.                                                      |                 | `boolean`                                                     | `false`  |
| loading   | Switch to loading state                                                 |                 | `boolean`                                                     | `false`  |
| onClose   | Specify a function that will be called when the message is closed.      |                 | `() => void`                                                  |          |
| className | Customized CSS class                                                    |                 | `string`                                                      |          |
| style     | Customized inline style                                                 |                 | `CSSProperties`                                               |          |

### About clear

This function clears the default `context` prompt message. The return value is the `message` function.

```ts
import { message } from 'are-visual'

message.clearAll()
```

<br/>

If you use `useMessage` then you should write something like this.

```ts
import { useMessage } from 'are-visual'

export default () => {
  const [msgApi, Message] = useMessage()
  return (
    <>
      <Message />
      <Button onClick={() => msgApi.clearAll()}>Clear</Button>
    </>
  )
}
```

Chain call：

```ts
import { message } from 'are-visual'

message.clearAll().success('Chain call')
```

### FAQ

#### Why is there a useMessage Hook?

When we use `React` to develop a project, you can usually see the following code in `index.js`.

```ts
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export default ReactDOM.render(<App />, document.getElementById('root'))
```

The `ReactDOM.render` function is called at the end of this code to create a React instance (let's call it an `App instance`).

<br/>

When we call the `message` function directly, `Are` uses the `ReactDOM.render` function to create an additional React instance (let's call it a `Symbol instance`) that displays a message via an alias function, which is logged inside the `Symbol instance`.

As a result, the `message` function cannot access the context of the `App instance`, there is no connection between them. So, that's why the `clearAll` function can't clear all the messages, only the messages inside the corresponding instance.

When you use `createContext` to pass data to a descendant component and `message` needs to display that data, you can't use the `message` function, you should use `useMessage` Hook instead.

`useMessage` Hook will return the corresponding call function and instance.

```ts
import { useMessage } from 'are-visual'

export default () => {
  const [msgApi, Message] = useMessage()
  return (
    <>
      {/* The currently created Message instance must be inserted in order to be associated with the current code. */}
      <Message />
    </>
  )
}
```

Of course, `msgApi` is used in exactly the same way as the `message` function, except that it corresponds to a different instance.

In summary: `message` and the current code are two instances, unrelated to each other. A `useMessage` Hook can return an instance that is inserted into the current code as a parent-child component relationship.
