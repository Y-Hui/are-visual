/** Create DOM */
const createContainer = (
  id: string,
  className = '',
  callback?: (dom: HTMLElement) => void,
) => {
  let container = document.getElementById(id)
  if (container) {
    return container
  }
  container = document.createElement('div')
  container.className = className
  container.id = id
  if (callback) {
    callback(container)
  }
  document.body.appendChild(container)
  return container
}

export { createContainer }
