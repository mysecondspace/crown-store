import React, { FC, InputHTMLAttributes } from 'react'

import styles from './styles.module.scss'

type InputProps = {
  id: string
  label: string
} & InputHTMLAttributes<HTMLInputElement>

const Input: FC<InputProps> = ({ id, label, ...otherProps }) => {
  return (
    <div className={styles.input}>
      {label && (
        <label
          htmlFor={id}
          className={`${Boolean(
            otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length > 0 &&
              styles.shrink
          )}`}
        >
          {label}
        </label>
      )}
      <input id={id} {...otherProps} />
    </div>
  )
}

export default Input
