import { MessageId } from '../Props'

export function generateId(id?: MessageId): MessageId {
  if (typeof id === 'number' || typeof id === 'string') {
    return id
  }
  return `Message_ID_${Date.now()}`
}
