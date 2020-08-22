/**
 * @description 获取数据类型
 * @param {any} param
 * @returns {string}
 * Eg: string || boolean || number || array
 */
export function getType(param: unknown): string {
  const result = Object.prototype.toString
    .call(param)
    .replace(/object |\[|\]/g, '')
  return result.toLocaleLowerCase()
}

type TargetType = Record<string, unknown> | any[]

/**
 * @description 删除[对象|数组]中指定的项（纯函数）
 * @param {Record<string, unknown>|any[]} obj 目标对象或数组
 * @param {any[]} keyList 要删除的 key/项 的集合
 * @returns {object|any[]} 返回一个新的对象
 */
export function omit(target: TargetType, keyList: any[]): TargetType {
  if (Array.isArray(target)) {
    const result: any[] = []
    target.forEach((item) => {
      if (!keyList.includes(item)) {
        result.push(item)
      }
    })
    return result
  }

  const result: Record<string, unknown> = {}
  Object.keys(target).forEach((key) => {
    if (!keyList.includes(key)) {
      result[key] = target[key]
    }
  })
  return result
}
