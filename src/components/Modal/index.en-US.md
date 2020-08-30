---
order: 3
---

## Modal

### Basic usage

<code src="./demo/basic.tsx" />

### API

| Props        | Description                                                                           | Type                 | Defaults |
| ------------ | ------------------------------------------------------------------------------------- | -------------------- | -------- |
| visible      | 模态框是否可见。                                                                      | `boolean`            | `false`  |
| top          | 距离顶部的位置。                                                                      | `string` \| `number` | `20%`    |
| zIndex       | 设置模态框 `z-index`。                                                                | `number`             | `1`      |
| line         | 是否显示分割线。                                                                      | `boolean`            | `false`  |
| title        | 模态框标题（header 部分）若传入的类型为 `string` 则显示为标题，否则替换 `header` 部分 | `React.ReactNode`    | -        |
| showClose    | 是否显示右上角关闭按钮。                                                              | `boolean`            | `true`   |
| lazyRender   | 懒渲染-页面初始化时不渲染组件。                                                       | `boolean`            | `false`  |
| maskClosable | 启用点击蒙层关闭模态框。                                                              | `boolean`            | `true`   |
| escClosable  | 启用按下 `ESC` 关闭模态框。                                                           | `boolean`            | `true`   |
| footer       | 自定义页脚内容。                                                                      | `React.ReactNode`    | -        |
| onClose      | 关闭按钮、点击蒙层、ESC 按键触发事件。                                                | `() => void`         | -        |
| onClosed     | 模态框关闭后的回调函数。                                                              | `() => void`         | -        |
