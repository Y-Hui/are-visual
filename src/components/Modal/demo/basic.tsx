import React, { useState } from 'react'
import { Modal, Button } from 'are-visual'

export default () => {
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)

  return (
    <>
      <Modal
        title="Content"
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        footer={[
          <Button key="cancel" onClick={() => setVisible(false)}>
            Cancel
          </Button>,
          <Button
            key="confirm"
            type="primary"
            onClick={() => setVisible(false)}
          >
            Confirm
          </Button>,
        ]}
        zIndex={1000}
      >
        <p>
          Early in the day it was whispered that we should sail in a boat, only
          thou and I, and never a soul in the world would know of this our
          pilgrimage to no country and to no end.
        </p>
      </Modal>
      <Modal
        title="Line style"
        visible={visible2}
        onClose={() => {
          setVisible2(false)
        }}
        footer={[
          <Button key="cancel" onClick={() => setVisible2(false)}>
            Cancel
          </Button>,
          <Button
            key="confirm"
            type="primary"
            onClick={() => setVisible2(false)}
          >
            Confirm
          </Button>,
        ]}
        zIndex={1000}
        line
      >
        <p>
          Early in the day it was whispered that we should sail in a boat, only
          thou and I, and never a soul in the world would know of this our
          pilgrimage to no country and to no end.
        </p>
      </Modal>
      <Button onClick={() => setVisible(true)}>Display Modal</Button>
      <Button onClick={() => setVisible2(true)}>Line Style</Button>
    </>
  )
}
