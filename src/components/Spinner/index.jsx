import React from 'react'

import styles from './styles.module.scss'

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.container}></div>
    </div>
  )
}

export default Spinner
