import React from 'react'
import classnames from 'classnames'
import { TextProps } from './types/text'
import './style/index.scss'

const Text: React.FC<TextProps> = (props) => {
  const {
    tag = 'p',
    style,
    spaceBottom,
    lineHeight,
    level,
    bold,
    block,
    weight,
    children,
  } = props
  return React.createElement<TextProps>(
    tag,
    {
      className: classnames('are-font', 'are-text', {
        'are-text--lh-1': lineHeight === '1',
        'are-text--lh-1-3': lineHeight === '1.3',
        'are-text--bold': bold,
        'are-text--block': block,
        [`are-text--weight-${weight}`]: weight,
        [`are-text--lv${level}`]: true,
      }),
      style: {
        ...style,
        marginBottom: `${spaceBottom}px`,
      },
    },
    children,
  )
}

Text.defaultProps = {
  tag: 'p',
  level: 6,
  block: true,
}

export default Text
