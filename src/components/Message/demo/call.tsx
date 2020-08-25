import React from 'react'
import { message, Button } from 'are-vision'

export default () => {
  const callMessage = () => {
    message.call({
      type: 'normal',
      content: 'Call Message',
      duration: 5000,
      loading: true,
      showClose: true,
    })
  }
  return (
    <>
      <Button onClick={callMessage}>Call Message</Button>
    </>
  )
}
