import { BasicStyle } from '../../../@types/index'

export interface TextProps extends BasicStyle {
  /** 渲染为指定标签，默认为 p 标签 */
  tag?: string
  /** 设置底部 margin */
  spaceBottom?: 10 | 16 | 20 | 30 | 40 | 50
  /** 设置行高 */
  lineHeight?: '1' | '1.3' | '1.5'
  /** 字体等级 */
  level?: 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6'
  /** 加粗 */
  bold?: boolean
  /** 独占一行 */
  block?: boolean
  /** 权重等级（颜色） */
  weight?: 1 | 2 | 3 | 4 | 5 | 6
}
