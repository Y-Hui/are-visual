import React, { useState } from 'react'
import { Modal, Button } from 'are-vision'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Modal
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        zIndex={1000}
      />
      <Button
        style={{
          position: 'fixed',
          top: 270,
          left: 1200,
        }}
        onClick={() => {
          setVisible((v) => !v)
        }}
      >
        Show modal
      </Button>
      <Button
        style={{
          position: 'fixed',
          top: 470,
          left: 600,
        }}
        onClick={() => {
          setVisible((v) => !v)
        }}
      >
        Show modal
      </Button>
      <Button
        style={{
          position: 'fixed',
          top: 170,
          left: 400,
        }}
        onClick={() => {
          setVisible((v) => !v)
        }}
      >
        Show modal
      </Button>
    </>
  )
}
