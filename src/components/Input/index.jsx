import React from 'react'

import styles from './styles.module.scss'

const FormInput = ({ id, label, inputOptions }) => {
  return (
    <div className={styles.input}>
      {label && (
        <label
          htmlFor={id}
          className={`${inputOptions.value.length > 0 && styles.shrink}`}
        >
          {label}
        </label>
      )}
      <input id={id} {...inputOptions} />
    </div>
  )
}

export default FormInput
