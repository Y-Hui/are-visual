import React, { useState } from 'react'
import { Overlay, Button } from 'are-vision'

export default () => {
  const [visible, setVisible] = useState(false)
  const onClick = () => {
    setVisible((v) => !v)
  }
  return (
    <>
      <Overlay
        zIndex={1000}
        visible={visible}
        onClose={() => setVisible(false)}
      />
      <Button onClick={onClick}>Click me</Button>
    </>
  )
}
