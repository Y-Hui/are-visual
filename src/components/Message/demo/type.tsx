import React from 'react'
import { message, Button } from 'are-vision'

export default () => {
  const normal = () => {
    message.info('Normal Message')
  }
  const warn = () => {
    message.warn('Warn Message')
  }
  const err = () => {
    message.err('Err Message')
  }
  const success = () => {
    message.success('Success Message')
  }

  return (
    <>
      <Button onClick={normal}>Normal</Button>
      <Button onClick={warn}>Warn</Button>
      <Button onClick={err}>Err</Button>
      <Button onClick={success}>Success</Button>
    </>
  )
}
