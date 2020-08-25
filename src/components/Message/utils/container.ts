const CONTAINER_ID = 'ARE-VISION-MESSAGE'

/** Create DOM */
const createContainer = () => {
  let container = document.getElementById(CONTAINER_ID)
  if (container) {
    return container
  }
  container = document.createElement('div')
  container.className = 'are-message-container'
  container.id = CONTAINER_ID
  document.body.appendChild(container)
  return container
}

export { CONTAINER_ID, createContainer }
