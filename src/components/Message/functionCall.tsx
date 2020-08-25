import React from 'react'
import ReactDOM from 'react-dom'
import MessageStore from './MessageStore'
import { MessageStoreRef } from './types/store'
import { createContainer, CONTAINER_ID } from './utils/container'
import { createAlias } from './alias'

let instance: MessageStoreRef | null = null

function init(): MessageStoreRef {
  const container = document.getElementById(CONTAINER_ID)
  if (!instance || !container) {
    ReactDOM.render(
      <MessageStore
        ref={(func) => {
          instance = func
        }}
      />,
      createContainer(),
    )
  }
  return instance as MessageStoreRef
}

function call(): MessageStoreRef {
  if (!instance) {
    return init()
  }
  return instance as MessageStoreRef
}

const message = createAlias(call)

export default message
