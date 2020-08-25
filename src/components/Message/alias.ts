import { MessageMethods, MessageCall } from './Props'

/**
 * 创建 Message 调用别名
 */
function createAlias(call: () => MessageCall): MessageMethods {
  const message: MessageMethods = {
    call(value) {
      return call().add(value)
    },
    info(content, duration, props) {
      return call().add({
        content,
        duration,
        ...props,
      })
    },
    warn(content, duration, props) {
      return call().add({
        type: 'warn',
        content,
        duration,
        ...props,
      })
    },
    err(content, duration, props) {
      return call().add({
        type: 'error',
        content,
        duration,
        ...props,
      })
    },
    success(content, duration, props) {
      return call().add({
        type: 'success',
        content,
        duration,
        ...props,
      })
    },
    loading(content, duration, props) {
      return call().add({
        content,
        duration,
        loading: true,
        ...props,
      })
    },
    clearAll() {
      call().clear()
      return message
    },
  }
  return message
}

export { createAlias }
