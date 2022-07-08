import React from 'react'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'

import styles from './styles.module.scss'

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div className={styles.authentication}>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication
