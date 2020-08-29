import {
  DialogAddParams,
  DialogIdType,
  DialogWrapperRef,
} from './types/wrapper'

export interface DialogAliasShape {
  /**
   * 显示一个 dialog
   */
  open: (value: DialogAddParams) => void
  /**
   * 更新指定 id 的 dialog
   */
  update: (value: DialogAddParams) => void
  /**
   * 清空所有 dialog
   *
   * 返回 dialog 函数以支持链式调用
   */
  clear: () => DialogAliasShape
  /**
   * 关闭指定 id 的 dialog
   *
   * 返回 dialog 函数以支持链式调用
   */
  close: (id: DialogIdType) => DialogAliasShape
}

type InstanceType = () => DialogWrapperRef

function createAlias(instance: InstanceType): DialogAliasShape {
  const aliasMethods: DialogAliasShape = {
    open(value) {
      instance().add(value)
    },
    update(value) {
      instance().update(value)
    },
    clear() {
      instance().clearAll()
      return aliasMethods
    },
    close(id) {
      instance().close(id)
      return aliasMethods
    },
  }
  return aliasMethods
}

export { createAlias }
