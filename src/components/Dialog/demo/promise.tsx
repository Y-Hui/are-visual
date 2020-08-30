import React from 'react'
import { dialog, message, Button } from 'are-visual'

export default () => {
  const onClick = () => {
    dialog.open({
      id: 'Dialog_01',
      title: 'Promise',
      content: 'onConfirm supports returning a Promise.',
      zIndex: 2000,
      confirmText: 'Confirm',
      maskClosable: false,
      showClose: false,
      onConfirm() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve()
            message.success('SUCCESS')
          }, 3000)
        })
      },
    })
  }
  return (
    <>
      <Button onClick={onClick}>Click me</Button>
    </>
  )
}
