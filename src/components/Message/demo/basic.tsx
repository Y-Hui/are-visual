import React from 'react'
import { message, Button } from 'are-visual'

export default () => {
  const showMessage = () => {
    message.info('Hello Are Vision.')
  }
  return (
    <>
      <Button onClick={showMessage}>Normal Message</Button>
    </>
  )
}
