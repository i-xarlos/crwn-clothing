import React, { useState } from 'react'
import {
  auth,
  createUserDocumentFromAuth,
} from '../../config/firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up-form.styles.scss'

const SignUpForm = () => {
  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    message: null,
  })

  const handleSubmit = async e => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = state

    if (password !== confirmPassword) {
      alert("password don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserDocumentFromAuth(user, { displayName })

      setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (e) {
      console.error(e)
      setState({ message: e.message })
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const { displayName, email, password, confirmPassword, message } = state

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
