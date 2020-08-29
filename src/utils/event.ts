import React from 'react'

export type KeyboardEventShape<T> = React.KeyboardEvent<T>

/** 空格键盘码 */
const SPACE = 32
/** 回车键盘码 */
const ENTER = 13
/** ESC 键盘码 */
const ESC = 27

/**
 * 键盘按下事件
 */
function onKeyBoardEvent<T>(
  event: KeyboardEventShape<T>,
  keyCode: number,
  callback: () => void,
) {
  if (event.keyCode === keyCode) {
    callback()
  }
}

export { onKeyBoardEvent, SPACE, ENTER, ESC }
