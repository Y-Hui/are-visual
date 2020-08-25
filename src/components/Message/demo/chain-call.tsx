import React from 'react'
import { message, Button } from 'are-vision'

export default () => {
  const showMessage = () => {
    message
      .info('Show Message.', 2000)
      .then(() => message.info('First callback.', 2000))
      .then(() => message.success('Second callback.'))
  }
  return (
    <>
      <Button onClick={showMessage}>Chain call</Button>
    </>
  )
}
