import React from 'react'
import { ReactComponent as Error } from '../../icons/err.svg'
import { ReactComponent as Warn } from '../../icons/warn.svg'
import { ReactComponent as Success } from '../../icons/success.svg'
import './style/status-icon.scss'

export interface StatusIconProps {
  type?: 'normal' | 'warn' | 'error' | 'success'
}

const StatusIcon = ({ type }: StatusIconProps) => {
  switch (type) {
    case 'warn':
      return <Warn className="are-svg are-message__warn" />
    case 'error':
      return <Error className="are-svg are-message__err" />
    case 'success':
      return <Success className="are-svg are-message__success" />
    default:
      return null
  }
}

StatusIcon.defaultProps = {
  type: undefined,
} as StatusIconProps

export default StatusIcon
