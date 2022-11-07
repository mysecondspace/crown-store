import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { useDispatch } from 'react-redux'

import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/user/user.action'

import Input from '../Input'
import Button, { BUTTON_TYPES_CLASSES } from '../Button'

import styles from './styles.module.scss'

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      dispatch(emailSignInStart(email, password))

      resetFormFields()
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert('Incorrect password for email')
          break
        case AuthErrorCodes.USER_DELETED:
          alert('No user associated with this email')
          break
        default:
          console.log(error)
      }
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className={styles.signIn}>
      <h1>Already have an account?</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={(e) => handleSubmit}>
        <Input
          label='Email'
          id='signInEmail'
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          required={true}
        />
        <Input
          label='Password'
          id='signInPassword'
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          required={true}
        />
        <div className={styles.buttons}>
          <Button type='submit'>Sign in</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPES_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
