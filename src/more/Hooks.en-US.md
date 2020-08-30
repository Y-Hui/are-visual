---
group:
  title: More
---

## Context & Hooks

If you've used some of the components of `Are` in the form of **function calls**, you'll have seen that we also provide a hook.

Such as：

- `message` and `useMessage` Hook
- `dialog` and `useDialog` Hook

These hooks were created to solve the problem of components always rendering default values when received with `Consumer` when data is passed down by `Provider`.

<br/>

Example:

```ts
import React, { createContext } from 'react'
import { Button, message } from 'are-visual'

/** Initialize name to the `default` string. */
const DemoCtx = createContext({ name: 'default' })

export default () => {
  const { Provider, Consumer } = DemoCtx

  const onClick = () => {
    /**
     * Receive data using `Consumer`. What is the content of this message?
     * Of course it should read: `Are Visual Message.`
     *
     * But contrary to expectations, the message reads `default`.
     */
    message.info(<Consumer>{({ name }) => name}</Consumer>)
  }

  return (
    <Provider value={{ name: 'Are Visual Message.' }}>
      {/* When the button is clicked, a `Message` is displayed. */}
      <Button onClick={onClick}>Related</Button>
    </Provider>
  )
}
```

The above code is apparently fine, but it still doesn't work properly, and we'll explain why for these reasons.

## ReactDOM.render

Do you remember this function? We usually use it when we first start creating `React` projects.

```ts
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

/** This is where you render the app component into the #root DOM container. */
ReactDOM.render(<App />, document.getElementById('root'))
```

The `ReactDOM.render` function is called at the end of this code to create a React instance (let's call it an `App instance`).

When the `message` function is called it creates an additional React instance (let's call it a `Symbol instance`) using the `ReactDOM.render` function, which then displays a prompt message at the top of the screen, which is logged inside the `Symbol instance`.

So these are two React instances that have nothing to do with each other. When you use `createContext` to pass data down, it's in the `App instance`, and it doesn't help if you write code like that.

```ts
message.info(<Consumer>{({ name }) => name}</Consumer>)
```

So, to solve such a problem, we provide the corresponding `Hook`.

## Hook

`useMessage` Hook is a workaround for the `message` function's inability to retrieve Context content, and it returns this value when called.

```ts
/** Of course, you can name it whatever you like. */
const [msgApi, MessageHolder] = useMessage()
```

The `useMessage` in this case doesn't create a React instance, but returns a wrapped Message component. So you just insert `MessageHolder` where you want it, and it becomes associated with the `App Instance` as a parent-child component.

```ts
/** Some codes omitted */

const [msgApi, MessageHolder] = useMessage()

/** Successfully obtained data for `Context`, the message reads: Are `Visual Message`. */
msgApi.info(<Consumer>{({ name }) => name}</Consumer>)


<Provider value={{ name: 'Are Visual Message.' }}>
  {/* Insert the MessageHolder */}
  <MessageHolder />
</Provider>
```

The most important step is to insert `MessageHolder`.

## Effect

If you've used the `message` function, then you probably know that there's a `message.clear()` function that does this by emptying the message prompts.
It was described earlier as creating additional React instances to hold these messages, so it's a separate section. `useMessage`, on the other hand, doesn't create instances, so the two are not interoperable, and you can't empty a message created by `useMessage`, or vice versa, with the `message.clear()` function.
The same goes for `message.close()`.

<br/>

Remember the other Hooks described at the beginning of this document? That's the same reason :)
