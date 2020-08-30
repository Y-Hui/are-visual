## Message 提示消息

### 基础用法

<code src="./demo/basic.tsx" />

### 提示类型（别名函数）

<code src="./demo/type.tsx" />

### 显示时长

提示消息默认显示时长为 `3000` 毫秒。你可以传入第二个参数来修改时长，若值为 `0` 则持续显示。

<code src="./demo/duration.tsx" />

### 清空提示消息

注意：`clear` 方法清空的是当前函数所在的上下文的提示消息。

<code src="./demo/clear.tsx" />

### 加载状态与更新

指定 `id` 用于更新

<code src="./demo/loading.tsx" />

### 关联上下文

你可以通过 `useMessage` hooks 创建一个上下文，与你的 `Provider` 相互关联。

<code src="./demo/context.tsx" />

### 完整写法

<code src="./demo/call.tsx" />

### 链式调用

<code src="./demo/chain-call.tsx" />

### 别名函数使用方式与参数：

- `message.info(content, [duration], [props])`

- `message.warn(content, [duration], [props])`

- `message.err(content, [duration], [props])`

- `message.success(content, [duration], [props])`

每个别名函数的返回值都包含一个关闭**当前提示消息**的函数

```ts
import { message } from 'are-visual'

const { close } = message.info('Info Message')

// 这个 `close` 便是关闭此条提示消息的函数
```

<br/>

**注意：一旦使用 `链式调用` 的 message 函数，那么 `close` 函数便不受支持。**

```ts
import { message } from 'are-visual'

// Error: 此时的 close 为 undefined
const { close } = message.info('Info Message', 0).then(() => {
  console.log('Callback')
})
```

每一个别名函数的返回类型都继承自一个 `PromiseLike` 类型，调用 `then` 函数时返回的是一个真正的 `Promise`，`Are` 以此种方式实现的链式调用，`then` 函数调用完毕后，返回值内已经不存在这样一个 `close` 函数了。所以 `链式调用` 和 `close` 函数只能取其一，二者不可兼得。

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

### `clear` 清空函数

此函数清空的是 `message 实例` 的提示消息。返回 `message` 函数。

```ts
import { message } from 'are-visual'

message.clear()
```

链式调用：

```ts
import { message } from 'are-visual'

message.clear().success('链式调用')
```

<br/>

如果使用 `useMessage` 那么你应该这样写：

```ts
import { useMessage } from 'are-visual'

export default () => {
  const [msgApi, MessageHolder] = useMessage()
  return (
    <>
      <MessageHolder />
      <Button onClick={() => msgApi.clear()}>Clear</Button>
    </>
  )
}
```

`useMessage` Hook 和 `message` 除使用方法一致以外，内部数据并不互通。所以，由 `useMessage` Hook 创建的提示消息不能够被 `message` 函数关闭、清空，反之亦然。
