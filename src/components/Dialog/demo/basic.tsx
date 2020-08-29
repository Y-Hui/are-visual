import React from 'react'
import { dialog, Button } from 'are-visual'

export default () => {
  const onClick = () => {
    dialog.open({
      id: 'DialogKey_00',
      title: 'TIPS',
      content: 'Write some content in the blank space here.',
      zIndex: 2000,
      cancelText: 'Cancel',
      confirmText: 'Confirm',
    })
  }
  return (
    <>
      <Button onClick={onClick}>Display dialog</Button>
    </>
  )
}
