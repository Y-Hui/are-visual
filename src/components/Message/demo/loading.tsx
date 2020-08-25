import React from 'react'
import { message, Button } from 'are-vision'

const key = 'LOADING_MESSAGE_KEY'

export default () => {
  const loading = () => {
    message.loading('Loading...', 0, {
      id: key,
    })

    // update
    setTimeout(() => {
      message.success('Loaded!', 400, {
        id: key,
      })
    }, 2000)
  }
  return (
    <>
      <Button onClick={loading}>Loading</Button>
    </>
  )
}
