import React, { PropsWithChildren } from 'react'
import classnames from 'classnames'
import { ElementProps } from './types/element'
import './style/index.scss'

const Element = (props: PropsWithChildren<ElementProps>) => {
  const {
    className,
    style,
    tag = 'div',
    radius,
    block,
    isShow,
    isRender,
    elevation,
    children,
    ...other
  } = props

  const node = React.createElement<ElementProps>(
    tag,
    {
      className: classnames(
        'are-element',
        {
          [`are-element--elevation-${elevation}`]: elevation !== 0,
          'are-element--block': block,
          'are-element--radius': radius,
        },
        className,
      ),
      style: {
        ...style,
        display: isShow ? '' : 'none',
      },
      ...other,
    },
    children,
  )
  return isRender ? node : null
}

Element.defaultProps = {
  elevation: 0,
  isShow: true,
  isRender: true,
  block: true,
} as ElementProps

export default Element
