import React from 'react'
import { dialog, Button } from 'are-visual'

export default () => {
  const onClick = () => {
    const KEY = `Dialog_${Date.now()}`
    let countdownTime = 5
    const timer = setInterval(() => {
      countdownTime -= 1
      dialog.update({
        id: KEY,
        content: `Countdown ${countdownTime} seconds to close.`,
      })
    }, 1000)

    setTimeout(() => {
      /** close dialog */
      dialog.close(KEY)
      clearInterval(timer)
    }, countdownTime * 1000)

    dialog.open({
      id: KEY,
      title: 'Countdown',
      content: `Countdown ${countdownTime} seconds to close.`,
      zIndex: 2000,
      confirmText: 'Close',
      maskClosable: false,
      showClose: false,
      onClose() {
        clearInterval(timer)
      },
    })
  }
  return (
    <>
      <Button onClick={onClick}>Manual shutdown</Button>
    </>
  )
}
