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

/**
 * @description 查找对象是否包含指定属性
 * @param target 目标对象
 * @param attr 属性名称
 */
export function hasOwn(
  target: Record<string, unknown>,
  attr: string | number | symbol,
): boolean {
  return Object.prototype.hasOwnProperty.call(target, attr)
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

/**
 * 条件执行函数，条件为 `true` 时执行 callback
 * @param callback 执行函数
 * @param condition 判断条件
 */
export function conditionFunc(callback: () => void, condition: boolean) {
  if (condition) {
    callback()
  }
}
