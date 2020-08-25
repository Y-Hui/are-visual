import React from 'react'
import classnames from 'classnames'
import { ReactComponent as Icon } from '../../icons/loading.svg'
import { BasicStyle } from '../../@types'
import './style/index.scss'

const Loading: React.FC<BasicStyle> = ({ style, className }) => {
  return <Icon className={classnames('are-loading', className)} style={style} />
}

export default Loading
