import { AddMessageParams, MessageResult } from './types/index'
import { MessageAliasMethods } from './types/alias'
import { MessageStoreRef } from './types/store'

function promiseWrapper(call: () => MessageStoreRef, value: AddMessageParams) {
  let promiseResolve: (value?: unknown) => void
  const promise = new Promise((resolve) => {
    promiseResolve = resolve
  })

  const close = call()?.add({
    ...value,
    onClose: () => {
      promiseResolve()
      if (value.onClose) {
        value.onClose()
      }
    },
  })
  const result: MessageResult = {
    close,
    then: (callback) => promise.then(callback),
  }
  return result
}

/**
 * 创建 Message 调用别名
 */
function createAlias(call: () => MessageStoreRef): MessageAliasMethods {
  const message: MessageAliasMethods = {
    call(value) {
      return promiseWrapper(call, value)
    },
    info(content, duration, props) {
      return promiseWrapper(call, {
        content,
        duration,
        ...props,
      })
    },
    warn(content, duration, props) {
      return promiseWrapper(call, {
        type: 'warn',
        content,
        duration,
        ...props,
      })
    },
    err(content, duration, props) {
      return promiseWrapper(call, {
        type: 'error',
        content,
        duration,
        ...props,
      })
    },
    success(content, duration, props) {
      return promiseWrapper(call, {
        type: 'success',
        content,
        duration,
        ...props,
      })
    },
    loading(content, duration, props) {
      return promiseWrapper(call, {
        content,
        duration,
        loading: true,
        ...props,
      })
    },
    clearAll() {
      const result = call()
      if (result) {
        call().clear()
      }
      return message
    },
  }
  return message
}

export { createAlias }
