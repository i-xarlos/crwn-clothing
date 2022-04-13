import React, { useState, useEffect } from 'react'
import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASES } from '../button/button.component'

import { useDispatch } from 'react-redux'
import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/user/user.actions'

import './sign-in-form.styles.scss'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [state, setState] = useState({ ...defaultFormFields })
  const dispatch = useDispatch()

  const { email, password } = state

  const resetFormFields = () => {
    setState(defaultFormFields)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    dispatch(emailSignInStart(email, password))
    resetFormFields()
  }

  const signInWidthGoogle = async () => {
    dispatch(googleSignInStart())
  }

  const handleChange = e => {
    const { value, name } = e.target
    setState({ ...state, [name]: value })
  }

  return (
    <div className='sign-in'>
      <h2>I have already and account</h2>
      <span>Sign in width your emnail and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          onChange={handleChange}
          value={email}
          label='email'
          required
        />

        <FormInput
          name='password'
          onChange={handleChange}
          type='password'
          value={password}
          label='password'
          required
        />

        <footer className='buttons'>
          <Button buttonType={BUTTON_TYPE_CLASES.base} type='submit'>
            Sign In{' '}
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASES.google}
            type='button'
            onClick={signInWidthGoogle}
            isGoogleSignIn
          >
            Sign In with Google
          </Button>
        </footer>
      </form>
    </div>
  )
}

export default SignInForm
