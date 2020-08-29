import React from 'react'
import ReactDOM from 'react-dom'
import DialogWrapper from './DialogWrapper'
import { createContainer } from '../../utils/container'
import { DialogWrapperRef } from './types/wrapper'
import { createAlias } from './alias'
import { MODAL_CONTAINER_ID } from './enum/id'

let instance: DialogWrapperRef | null = null

function init() {
  const container = document.getElementById(MODAL_CONTAINER_ID)
  if (!instance || !container) {
    const holder = createContainer(MODAL_CONTAINER_ID)
    ReactDOM.render(
      <DialogWrapper
        ref={(func) => {
          instance = func
        }}
        holder={holder}
      />,
      holder,
    )
  }
  return instance as DialogWrapperRef
}

function callInstance(): DialogWrapperRef {
  if (!instance) {
    return init()
  }
  return instance as DialogWrapperRef
}

init()

const dialog = createAlias(callInstance)

export default dialog
