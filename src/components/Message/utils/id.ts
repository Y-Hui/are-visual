import { MessageIdType } from '../types/index'

export function generateId(id?: MessageIdType): MessageIdType {
  if (typeof id === 'number' || typeof id === 'string') {
    return id
  }
  return `Message_ID_${Date.now()}`
}
