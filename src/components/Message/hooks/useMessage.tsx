import React, { useRef } from 'react'
import MessageWrapper from '../MessageWrapper'
import { MessageAliasMethods } from '../types/alias'
import { MessageStoreRef } from '../types/store'
import { createContainer } from '../utils/container'
import { createAlias } from '../alias'

export default function useMessage(): [MessageAliasMethods, React.FC] {
  const instance = useRef<MessageStoreRef>(null)

  const MessageHolder = () => (
    <MessageWrapper ref={instance} holder={createContainer()} />
  )
  return [createAlias(() => instance.current as MessageStoreRef), MessageHolder]
}
