import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { useDispatch } from 'react-redux'

import { signUpStart } from '../../store/user/user.action'

import Input from '../Input'
import Button, { BUTTON_TYPES_CLASSES } from '../Button'

import styles from './styles.module.scss'

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { name, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords don't match")

      return
    }

    try {
      dispatch(signUpStart(name, email, password))

      resetFormFields()
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Cannot create user, email already in use')
      } else {
        console.log('User creation encountered an error', error)
      }
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className={styles.signUp}>
      <h1>Don't have an account</h1>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input
          id='name'
          label='Display name'
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
          required={true}
        />

        <Input
          id='email'
          label='Email'
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          required={true}
        />
        <Input
          id='password'
          label='Password'
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          required={true}
        />
        <Input
          id='confirmPassword'
          label='Confirm password'
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          required={true}
        />
        <Button buttonType={BUTTON_TYPES_CLASSES.reversed}>Sign up</Button>
      </form>
    </div>
  )
}

export default SignUp
