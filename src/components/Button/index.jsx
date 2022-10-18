import React from 'react'
import clsx from 'clsx'

import styles from './styles.module.scss'

export const BUTTON_TYPES_CLASSES = {
  google: 'google',
  reversed: 'reversed',
}

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button
      className={clsx(styles.button, styles[BUTTON_TYPES_CLASSES[buttonType]])}
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading ? <span className={styles.spinner}></span> : children}
    </button>
  )
}

export default Button
