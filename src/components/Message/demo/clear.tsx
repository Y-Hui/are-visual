import React from 'react'
import { message, useMessage, Button } from 'are-vision'

export default () => {
  const [msgApi, Message] = useMessage()

  const independentContext = () => {
    /** Because this is an independent context */
    msgApi.err('I will not be cleared by the default function', 0)
  }

  const keepDisplay = () => {
    message.info('Keep display message.', 0)
  }

  const clear = () => {
    message.clearAll()
  }

  return (
    <>
      <Message />
      <Button onClick={keepDisplay}>Keep display</Button>
      <Button onClick={independentContext}>Independent context</Button>
      <Button onClick={clear}>Clear all</Button>
    </>
  )
}
