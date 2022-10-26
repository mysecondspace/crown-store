import React from 'react'

import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'

import styles from './styles.module.scss'

const Authentication = () => {
  return (
    <div className={styles.authentication}>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication
