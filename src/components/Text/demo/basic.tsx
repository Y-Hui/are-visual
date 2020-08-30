import React from 'react'
import { Text, Button } from 'are-visual'

export default () => {
  const onClick = () => {
    //
  }
  return (
    <>
      <Text tag="h1" level="1" lineHeight="1.3" spaceBottom={16}>
        Text-H2-Arial 中文字符 01234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
        abcdefghijklmnopqrstuvwxyz
      </Text>
      <Button onClick={onClick}>Click me</Button>
    </>
  )
}
