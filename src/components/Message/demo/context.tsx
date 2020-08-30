import React, { createContext } from 'react'
import { useMessage, Button } from 'are-visual'

const DemoCtx = createContext({ name: 'default' })

export default () => {
  const [msgApi, MessageHolder] = useMessage()
  const { Provider, Consumer } = DemoCtx

  const onClick = () => {
    msgApi.success(<Consumer>{({ name }) => name}</Consumer>)
  }

  return (
    <Provider value={{ name: 'Are Vision Message.' }}>
      <MessageHolder />
      <Button onClick={onClick}>Related</Button>
    </Provider>
  )
}
