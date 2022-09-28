import React, { useState } from 'react'

import Input from '../Input'
import Button from '../Button'

import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/user/user.action'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignUp = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart())
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      dispatch(emailSignInStart(email, password))

      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email')
          break
        case 'auth/user-not-found':
          alert('No user associated with this email')
          break
        default:
          console.log(error)
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className={styles.signIn}>
      <h1>Already have an account?</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input
          label='Email'
          id='signInEmail'
          inputOptions={{
            type: 'email',
            name: 'email',
            value: email,
            onChange: handleChange,
            required: true,
          }}
        />
        <Input
          label='Password'
          id='signInPassword'
          inputOptions={{
            type: 'password',
            name: 'password',
            value: password,
            onChange: handleChange,
            required: true,
          }}
        />
        <div className={styles.buttons}>
          <Button type='submit'>Sign in</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
