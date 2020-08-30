import { createContainer as create } from '../../../utils/container'

const CONTAINER_ID = 'ARE-VISUAL-MESSAGE'

/** Create DOM */
const createContainer = () => {
  return create(CONTAINER_ID, 'are-message-container')
}

export { CONTAINER_ID, createContainer }
