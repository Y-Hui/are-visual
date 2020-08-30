---
group:
  title: 更多
---

## Context 与 Hooks

如果你使用过 `Are` 一些**函数调用形式**的组件，你应该都能看到我们还提供了一个 Hook。

例如：

- `message` 函数 与 `useMessage` Hook
- `dialog` 函数 与 `useDialog` Hook

这些 Hook 的出现是为了解决由 `Provider` 向下传递数据，使用 `Consumer` 接收时组件总是渲染默认值的问题。

<br/>

通常会这样：

```ts
import React, { createContext } from 'react'
import { Button, message } from 'are-visual'

/** 初始化 name 为 `default` 字符串 */
const DemoCtx = createContext({ name: 'default' })

export default () => {
  const { Provider, Consumer } = DemoCtx

  const onClick = () => {
    /**
     * 使用 `Consumer` 接收数据。这条提示消息的内容是什么？
     * 当然应当是：`Are Visual Message.`
     *
     * 但是事与愿违，这条提示消息的内容却是：`default`
     */
    message.info(<Consumer>{({ name }) => name}</Consumer>)
  }

  return (
    <Provider value={{ name: 'Are Visual Message.' }}>
      {/* 点击按钮时，会展示一条提示消息 */}
      <Button onClick={onClick}>Related</Button>
    </Provider>
  )
}
```

以上的代码显然是没有问题的，但是它依旧不能正常工作，接下来，我们将为你说明这些原因。

## ReactDOM.render 函数

还记得这个函数吗？我们刚开始创建 React 项目时，通常会使用到它。

```ts
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

/** 就是此刻将 App 组件渲染到 #root DOM 容器中 */
ReactDOM.render(<App />, document.getElementById('root'))
```

这段代码末尾处调用了 `ReactDOM.render` 函数，创建一个 React 实例（暂且称其为 `App 实例`）。

在调用 `message` 函数时它会使用 `ReactDOM.render` 函数创建一个额外的 React 实例（暂且称其为 `Symbol 实例`），接着会在屏幕顶部显示一条提示消息，这条提示消息被记录在 `Symbol 实例` 内部。

因此，这是两个 React 实例，它们没有任何关联。当你使用 `createContext` 向下传递数据时，是在 `App 实例` 中的行为，即使你写这样的代码也无济于事。

```ts
message.info(<Consumer>{({ name }) => name}</Consumer>)
```

所以，为了解决这样的问题，我们提供了对应的 Hook。

## Hook

`useMessage` Hook 是解决 `message` 函数无法获取 Context 内容的的解决方法，它调用后会返回这样的值：

```ts
/** 当然，如何命名可以随你的喜好 */
const [msgApi, MessageHolder] = useMessage()
```

此处的的 `useMessage` 则没有创建 React 实例，而是返回包装过的 Message 组件。所以你只要在你需要的地方插入 `MessageHolder`，即可与 `App 实例` 产生关联，成为了父子组件的关系。

```ts
/** 省略部分代码 */

const [msgApi, MessageHolder] = useMessage()

/** 成功获取到 Context 的数据，这条提示消息内容为：Are Visual Message. */
msgApi.info(<Consumer>{({ name }) => name}</Consumer>)


<Provider value={{ name: 'Are Visual Message.' }}>
  {/* 插入 MessageHolder */}
  <MessageHolder />
</Provider>
```

至关重要的一步便是插入 `MessageHolder`。

## 产生的影响

如果你使用过 `message` 函数，那么你或许知道有一个 `message.clear()` 函数，它的作用是清空提示消息。
先前介绍过它创建了额外的 React 实例保存这些提示消息，所以是一个独立的部分。而 `useMessage` 则没有创建实例，所以这两者不互通，你无法通过 `message.clear()` 函数清空由 `useMessage` 创建的提示消息，反之亦然。
`message.close()` 也是一样。

<br/>

还记得此篇文档开头介绍的其他 Hooks 吗？也是这个原因 :)
