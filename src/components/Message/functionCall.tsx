import React from 'react'
import ReactDOM from 'react-dom'
import MessageStore from './MessageStore'
import { MessageCall } from './Props'
import { createContainer, CONTAINER_ID } from './MessageContent'
import { createAlias } from './alias'

let instance: MessageCall | null = null

function init(): MessageCall {
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
  return instance as MessageCall
}

function call(): MessageCall {
  if (!instance) {
    return init()
  }
  return instance as MessageCall
}

const message = createAlias(call)

export default message
