## Message 提示

### 基础用法

<code src="./demo/basic.tsx" />

### 提示类型（别名函数）

<code src="./demo/type.tsx" />

### 显示时长

Message 默认显示时长为 `3000` 毫秒。你可以传入第二个参数来修改时长，若值为 `0` 则持续显示。

<code src="./demo/duration.tsx" />

### 清理提示

注意：`clearAll` 方法清空的是当前函数所在的上下文的提示消息。

<code src="./demo/clear.tsx" />

### 加载状态与更新

指定 `id` 用于更新 Message

<code src="./demo/loading.tsx" />

### 关联上下文

你可以通过 `useMessage` hooks 创建一个上下文，与你的 `Provider` 相互关联。

<code src="./demo/context.tsx" />

### 完整写法

<code src="./demo/call.tsx" />

### 别名函数使用方式与参数：

- `message.info(content, [duration], [props])`

- `message.warn(content, [duration], [props])`

- `message.err(content, [duration], [props])`

- `message.success(content, [duration], [props])`

每个别名函数的返回值为**当前添加的提示消息**的关闭函数

#### Props

| 属性      | 描述                                        | 是否必填 | 类型                                                          | 默认值   |
| --------- | ------------------------------------------- | -------- | ------------------------------------------------------------- | -------- |
| id        | `Message` 唯一标识                          |          | `number` \| `string`                                          |          |
| type      | `Message` 样式类型                          |          | `normal` \| `primary` \| `warn` \|<br /> `error` \| `success` | `normal` |
| content   | 提示内容                                    | 是       | `ReactNode`                                                   |          |
| duration  | 显示时长（毫秒）<br />若值为 `0` 则持续显示 |          | `number`                                                      | `3000`   |
| showClose | 显示关闭按钮                                |          | `boolean`                                                     | `false`  |
| loading   | 切换为加载状态                              |          | `boolean`                                                     | `false`  |
| onClose   | 提示内容关闭时的回调                        |          | `() => void`                                                  |          |
| className | 自定义 CSS class                            |          | `string`                                                      |          |
| style     | 自定义行内样式                              |          | `CSSProperties`                                               |          |

### `ClearAll`清空函数

此函数清空的是默认的 `context` 的提示消息。返回值为 `message` 函数。

```ts
import { message } from 'are-vision'

message.clearAll()
```

<br/>

如果使用 `useMessage` 那么你应该这样写：

```ts
import { useMessage } from 'are-vision'

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

链式调用：

```ts
import { message } from 'are-vision'

message.clearAll().success('链式调用')
```

### FAQ

#### 为什么有一个 useMessage Hook？

当我们使用 `React` 开发一个项目时，你通常能在 `index.js` 中看到如下代码：

```ts
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export default ReactDOM.render(<App />, document.getElementById('root'))
```

这段代码末尾处调用了 `ReactDOM.render` 函数，创建一个 React 实体（暂且称其为 `App 实体`）。

<br/>

当我们直接调用 `message` 函数时，`Are` 会使用 `ReactDOM.render` 函数创建一个额外的 React 实体（暂且称其为 `Symbol 实体`），通过别名函数显示一个提示消息，这条提示被记录在 `Symbol 实体` 内部。

因此，`message` 函数无法访问到处于 `App 实体` 的上下文，它们之间并没有任何联系。所以，这也是为什么 `clearAll` 函数无法清除所有的提示消息，只能清除对应实体内部的提示消息。

当你使用 `createContext` 向子孙组件传递数据并且 `message` 需要显示这些数据时，你就不能使用 `message` 函数，而应该使用 `useMessage` Hook。

`useMessage` Hook 会返回对应的调用函数和实体。

```ts
import { useMessage } from 'are-vision'

export default () => {
  const [msgApi, Message] = useMessage()
  return (
    <>
      {/* 必须要插入当前创建的 Message 实体，才能与当前代码产生关联 */}
      <Message />
    </>
  )
}
```

当然，`msgApi` 使用方式和 `message` 函数完全一样，只是对应不一样的实体。

综上所述：`message` 与当前代码属于两个实体，互不关联。`useMessage` Hook 可以返回一个实体，在当前代码中插入，成为父子组件关系。
