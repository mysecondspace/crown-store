import React, { useState } from 'react'

import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'

import Input from '../Input'
import Button from '../Button'

import styles from './styles.module.scss'

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { name, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords don't match")

      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)

      await createUserDocumentFromAuth(user, { name })
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.log('User creation encountered an error', error)
      }
    }
  }

  const handleChange = (e) => {
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
          inputOptions={{
            type: 'text',
            name: 'name',
            value: name,
            onChange: handleChange,
            required: true,
          }}
        />

        <Input
          id='email'
          label='Email'
          inputOptions={{
            type: 'email',
            name: 'email',
            value: email,
            onChange: handleChange,
            required: true,
          }}
        />
        <Input
          id='password'
          label='Password'
          inputOptions={{
            type: 'password',
            name: 'password',
            value: password,
            onChange: handleChange,
            required: true,
          }}
        />
        <Input
          id='confirmPassword'
          label='Confirm password'
          inputOptions={{
            type: 'password',
            name: 'confirmPassword',
            value: confirmPassword,
            onChange: handleChange,
            required: true,
          }}
        />
        <Button buttonType='reversed'>Sign up</Button>
      </form>
    </div>
  )
}

export default SignUp
