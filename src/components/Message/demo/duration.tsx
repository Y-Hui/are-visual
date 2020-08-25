import React from 'react'
import { message, Button } from 'are-vision'

export default () => {
  const keepDisplay = () => {
    message.info('Keep display message.', 0)
  }

  const fiveSeconds = () => {
    message.info('Five seconds message.', 5000)
  }

  const closeButton = () => {
    message.info('I hava a close button.', 0, {
      showClose: true,
      onClose: () => {
        message.warn(`I'm callback message`)
      },
    })
  }

  const manualShutdown = () => {
    const { close } = message.info('Message can be closed manually.', 5000)
    setTimeout(close, 1000)
  }

  return (
    <>
      <Button onClick={keepDisplay}>Keep display</Button>
      <Button onClick={fiveSeconds}>Five seconds</Button>
      <Button onClick={closeButton}>Close button</Button>
      <Button onClick={manualShutdown}>Manual shutdown</Button>
    </>
  )
}
