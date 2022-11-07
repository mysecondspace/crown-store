import React, { ButtonHTMLAttributes, FC } from 'react'
import clsx from 'clsx'

import styles from './styles.module.scss'

export enum BUTTON_TYPES_CLASSES {
  google = 'google',
  reversed = 'reversed',
}

type ButtonProps = {
  isLoading?: boolean
  buttonType?: BUTTON_TYPES_CLASSES
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(styles.button, buttonType && styles[buttonType])}
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading ? <span className={styles.spinner}></span> : children}
    </button>
  )
}

export default Button
