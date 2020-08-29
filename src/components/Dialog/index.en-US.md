## Dialog

### Basic usage

<code src="./demo/basic.tsx" />

### Promise

<code src="./demo/promise.tsx" />

### Close

<code src="./demo/close.tsx" />

### Context & Hooks

<code src="./demo/context.tsx" />

<br/>

`dialog` is a function that includes the following methods.

- `dialog.open` Creates a dialog box.
- `dialog.update` Updates a dialog box via id.
- `dialog.close` Closes a dialog box via id.
- `dialog.clear` Clears the dialog box in the current instance (the instance created by `dialog`).

The `useDialog` Hook and `dialog` functions are identical.

```ts
import { useDialog } from 'are-visual'

const [dialogApi, DialogHolder] = useDialog()

export default () => {
  reeturn(
    <div>
      {/* Instances created by hooks must be inserted in order to access the context and make contact with the current component. */}
      <DialogHolder />
    </div>,
  )
}
```

`useDialog` Hook and `dialog` do not share the same internal data, except that they are used in the same way. Therefore, dialog boxes created by `useDialog` Hook cannot be closed and emptied by the `dialog` function, and vice versa.

### API

| Props              | Description                                | Type                                                      | Defaults                     |
| ------------------ | ------------------------------------------ | --------------------------------------------------------- | ---------------------------- |
| id (required)      | Dialog Key.                                | `string`                                                  | -                            |
| top                | Dialog distance from the top.              | `string` \| `number`                                      | `20%`                        |
| zIndex             | Set `z-index`                              | `number`                                                  | -                            |
| title              | Dialog title.                              | `React.ReactNode`                                         | -                            |
| content            | Dialog content.                            | `React.ReactNode`                                         | -                            |
| showClose          | Display the top right corner close button. | `boolean`                                                 | `true`                       |
| maskClosable       | Click on the mask to turn it off.          | `boolean`                                                 | `true`                       |
| footer             | Custom footer content.                     | `React.ReactNode`                                         | `Cancel and Confirm buttons` |
| confirmText        | Text of the Confirm button.                | `string`<br />If it is a falsy value, it is not rendered. | -                            |
| cancelText         | Text of the Cancel button.                 | `string`<br />If it is a falsy value, it is not rendered. | -                            |
| onClose            | Callback Functions on Close.               | `() => void`                                              | -                            |
| onCancel           | Cancel button callback function.           | `() => void`                                              | -                            |
| onConfirm          | Confirm button callback function.          | `() => void`                                              | -                            |
| cancelButtonProps  | The Cancel button props.                   | `ButtonProps`                                             | -                            |
| confirmButtonProps | The Confirm button props.                  | `ButtonProps`                                             | -                            |
