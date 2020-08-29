/**
 * 处理函数返回值中的 Promise
 */
export function handlerPromise(
  maybePromise?: PromiseLike<any> | void,
  beforeResolve?: () => void,
) {
  if (!maybePromise || !maybePromise.then) {
    return Promise.reject()
  }
  if (beforeResolve) {
    beforeResolve()
  }
  return Promise.resolve(maybePromise)
}
