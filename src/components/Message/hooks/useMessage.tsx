import React, { useRef } from 'react'
import MessageStore from '../MessageStore'
import { MessageMethods, MessageCall } from '../Props'
import { createContainer } from '../MessageContent'
import { createAlias } from '../alias'

export default function useMessage(): [MessageMethods, React.FC] {
  const instance = useRef<MessageCall>(null)

  const MessageWrapper = () => (
    <MessageStore ref={instance} holder={createContainer()} />
  )
  return [createAlias(() => instance.current as MessageCall), MessageWrapper]
}
