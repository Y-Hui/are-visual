import React, { useRef } from 'react'
import MessageStore from '../MessageStore'
import { MessageAliasMethods } from '../types/alias'
import { MessageStoreRef } from '../types/store'
import { createContainer } from '../utils/container'
import { createAlias } from '../alias'

export default function useMessage(): [MessageAliasMethods, React.FC] {
  const instance = useRef<MessageStoreRef>(null)

  const MessageWrapper = () => (
    <MessageStore ref={instance} holder={createContainer()} />
  )
  return [
    createAlias(() => instance.current as MessageStoreRef),
    MessageWrapper,
  ]
}
