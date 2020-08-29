import React, { useState } from 'react'
import { Element, Button } from 'are-visual'

export default () => {
  const [state, setState] = useState(false)
  const onClick = () => {
    console.log(state)
    setState((v) => !v)
  }
  return (
    <>
      <Element>Element</Element>
      <br />
      <Button onClick={onClick}>Click me</Button>
    </>
  )
}
