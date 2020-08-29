import React, { useRef } from 'react'
import DialogWrapper from '../DialogWrapper'
import { DialogWrapperRef } from '../types/wrapper'
import { createAlias, DialogAliasShape } from '../alias'
import { MODAL_CONTAINER_ID } from '../enum/id'
import { createContainer } from '../../../utils/container'

function useDialog(): [DialogAliasShape, React.FC] {
  const instance = useRef<DialogWrapperRef>(null)
  const DialogHolder = () => (
    <DialogWrapper
      ref={instance}
      holder={createContainer(MODAL_CONTAINER_ID)}
    />
  )
  return [createAlias(() => instance.current as DialogWrapperRef), DialogHolder]
}

export default useDialog
