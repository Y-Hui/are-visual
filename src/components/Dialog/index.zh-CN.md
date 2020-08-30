---
order: 3
---

## Dialog 对话框

### 基础用法

<code src="./demo/basic.tsx" />

### Promise

<code src="./demo/promise.tsx" />

### 手动关闭

<code src="./demo/close.tsx" />

### 上下文（Context） 和 Hooks

<code src="./demo/context.tsx" />

<br/>

`dialog` 是一个函数，包括以下几种方法：

- `dialog.open` 创建一个对话框。
- `dialog.update` 通过 id 更新一个对话框。
- `dialog.close` 通过 id 关闭一个对话框。
- `dialog.clear` 清空当前实例（`dialog` 所创建的实例）中的对话框。

`useDialog` Hook 和 `dialog` 函数一致。

```ts
import { useDialog } from 'are-visual'

const [dialogApi, DialogHolder] = useDialog()

export default () => {
  reeturn(
    <div>
      {/* 必须插入 hooks 所创建的实例，才能够访问到上下文，与当前组件产生联系。 */}
      <DialogHolder />
    </div>,
  )
}
```

`useDialog` Hook 和 `dialog` 除使用方法一致以外，内部数据并不互通。所以，由 `useDialog` Hook 创建的对话框不能够被 `dialog` 函数关闭、清空，反之亦然。

### API

| 属性               | 描述                  | 类型                                               | 默认值           |
| ------------------ | --------------------- | -------------------------------------------------- | ---------------- |
| id（必填）         | Dialog 唯一标识       | `string`                                           | -                |
| top                | Dialog 距离顶部的位置 | `string` \| `number`                               | `20%`            |
| zIndex             | 层级                  | `number`                                           | -                |
| title              | 标题内容              | `React.ReactNode`                                  | -                |
| content            | 内容                  | `React.ReactNode`                                  | -                |
| showClose          | 显示右上角关闭按钮    | `boolean`                                          | `true`           |
| maskClosable       | 点击蒙层可关闭        | `boolean`                                          | `true`           |
| footer             | 自定义 footer 内容    | `React.ReactNode`                                  | `取消、确认按钮` |
| confirmText        | 确认按钮文字          | `string`<br />若传入的值被判断为 falsy，则不渲染。 | -                |
| cancelText         | 取消按钮文字          | `string`<br />若传入的值被判断为 falsy，则不渲染。 | -                |
| onClose            | 关闭时的回调函数      | `() => void`                                       | -                |
| onCancel           | 取消按钮回调函数      | `() => void`                                       | -                |
| onConfirm          | 确认按钮回调函数      | `() => void`                                       | -                |
| cancelButtonProps  | 取消按钮 Props        | `ButtonProps`                                      | -                |
| confirmButtonProps | 确认按钮 Props        | `ButtonProps`                                      | -                |
