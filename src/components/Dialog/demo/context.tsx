import React, { createContext } from 'react'
import { useDialog, Button } from 'are-visual'

const DemoCtx = createContext({ name: 'default' })

export default () => {
  const [dialog, DialogHolder] = useDialog()
  const { Provider, Consumer } = DemoCtx

  const onClick = () => {
    dialog.open({
      id: 'Consumer',
      title: 'Context',
      content: <Consumer>{({ name }) => name}</Consumer>,
      confirmText: 'OK',
      zIndex: 2000,
    })
  }

  return (
    <Provider value={{ name: 'Are Visual Dialog.' }}>
      <DialogHolder />
      <Button onClick={onClick}>Related</Button>
    </Provider>
  )
}
