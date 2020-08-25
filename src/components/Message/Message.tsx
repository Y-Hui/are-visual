import React from 'react'
import classnames from 'classnames'
import { MessageProps } from './Props'
import Loading from '../Loading'
import { ReactComponent as Error } from '../../icons/err.svg'
import { ReactComponent as Warn } from '../../icons/warn.svg'
import { ReactComponent as Success } from '../../icons/success.svg'
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

  const statusIcon = () => {
    switch (type) {
      case 'warn':
        return (
          <span className="are-message__icon">
            <Warn className="are-message__warn" />
          </span>
        )
      case 'error':
        return (
          <span className="are-message__icon">
            <Error className="are-message__err" />
          </span>
        )
      case 'success':
        return (
          <span className="are-message__icon">
            <Success className="are-message__success" />
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className={classnames('are-message')}>
      <div
        className={classnames(
          {
            'are-message__content-wrap': true,
            'are-message__content-wrap--close': showClose,
          },
          className,
        )}
        style={style}
      >
        {loading ? (
          <span className="are-message__icon">
            <Loading
              className={classnames({
                'are-message__loading': true,
                'are-message__loading--space': children,
              })}
            />
          </span>
        ) : (
          statusIcon()
        )}
        <div className="are-message__content">{children}</div>
        {showClose ? (
          <span
            className="are-message__close"
            role="button"
            onClick={onClose}
            tabIndex={-1}
            onKeyPress={() => {}}
          >
            <Close className="are-message__clear" />
          </span>
        ) : null}
      </div>
    </div>
  )
}

export default Message
