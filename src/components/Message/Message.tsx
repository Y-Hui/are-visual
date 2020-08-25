import React from 'react'
import classnames from 'classnames'
import { MessageProps } from './types/message'
import Loading from '../Loading'
import StatusIcon from './StatusIcon'
import { ReactComponent as Close } from '../../icons/close.svg'
import './style/index.scss'

const Message: React.FC<MessageProps> = (props) => {
  const {
    className,
    style,
    type = 'normal',
    loading = false,
    children,
    showClose,
    onClose,
  } = props

  const icon = () => {
    if (loading) {
      return (
        <Loading
          className={classnames({
            'are-message__loading': true,
            'are-message__loading--space': children,
          })}
        />
      )
    }
    return <StatusIcon type={type} />
  }

  return (
    <div className={classnames('are-message-wrapper')}>
      <div
        className={classnames(
          {
            'are-message': true,
            'are-message--close': showClose,
          },
          className,
        )}
        style={style}
      >
        {icon()}
        <div className="are-message__content">{children}</div>
        {showClose ? (
          <span
            className="are-message__close"
            role="button"
            onClick={onClose}
            tabIndex={-1}
            onKeyPress={() => {}}
          >
            <Close className="are-svg" />
          </span>
        ) : null}
      </div>
    </div>
  )
}

export default Message
