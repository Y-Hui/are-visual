import { DialogProps } from './dialog'
import { Omit } from '../../../utils/type'

export type DialogIdType = string

/** Store 中 Dialog 类型 */
export interface DialogState extends DialogProps {
  /** 唯一标识符 */
  id: DialogIdType
}

/** 添加 Dialog 需要传递的参数 */
export type DialogAddParams = Omit<
  DialogState,
  'onClosed' | 'visible' | 'container'
>

export type DialogItem = Omit<DialogState, 'onClosed' | 'container'>

/** 存储的 Dialog */
export interface DialogMap {
  [propsName: string]: DialogItem
}

interface AddAction {
  type: 'add' | 'update'
  /** 新增、修改数据 */
  payload: DialogItem
}
interface RemoveAction {
  type: 'remove'
  /** 根据 id 删除数据 */
  id: DialogIdType
}

export type ReducerAction = AddAction | RemoveAction

export interface DialogWrapperRef {
  add: (value: DialogAddParams) => void
  /** 指定 id 更新 dialog */
  update: (value: DialogAddParams) => void
  /** 清空所有的 dialog */
  clearAll: () => void
  /** 指定 id 关闭 dialog */
  close: (id: DialogIdType) => void
}

export interface DialogWrapperProps {
  /** 渲染目标 DOM 节点 */
  holder?: HTMLElement
}
