import React from 'react'
import clsx from 'clsx'

import styles from './styles.module.scss'

const BUTTON_TYPES_CLASSES = {
  google: 'google',
  reversed: 'reversed',
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={clsx(styles.button, styles[BUTTON_TYPES_CLASSES[buttonType]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
