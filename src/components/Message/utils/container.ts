import { createContainer as create } from '../../../utils/container'

const CONTAINER_ID = 'ARE-VISUAL-MESSAGE'

/** Create DOM */
const createContainer = () => {
  return create(CONTAINER_ID)
}

export { CONTAINER_ID, createContainer }
