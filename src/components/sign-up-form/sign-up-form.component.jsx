import React, { useState, useContext } from 'react'
import {
  createUserDocumentFromAuth,
  createUserWithEmailAndPasswordFromAuth,
} from '../../config/firebase/firebase.utils'

import { UserContext } from '../../context/user.context'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  message: '',
}

const SignUpForm = () => {
  const [state, setState] = useState({
    ...defaultFormFields,
  })
  const { setCurrentUser } = useContext(UserContext)

  const { displayName, email, password, confirmPassword, message } = state

  const handleSubmit = async e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("password don't match")
      return
    }

    try {
      const { user } = await createUserWithEmailAndPasswordFromAuth(
        email,
        password
      )
      await createUserDocumentFromAuth(user, { displayName })

      setState({
        ...defaultFormFields,
        message: 'User has been created',
      })

      setCurrentUser({ ...user, displayName })
    } catch (e) {
      if (e.code === 'auth/email-already-in-use') {
        return setState({
          ...state,
          message: 'Cannot create user, email already in use ',
        })
      }
      console.error('User creation encountered an error: ', e)
      setState({ ...state, message: e.message })
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form className='sign.up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='confirmPassword'
          required
        />
        {message && <span className='message'>* {message}</span>}
        <CustomButton type='submit'>Sign up</CustomButton>
      </form>
    </div>
  )
}
export default SignUpForm
