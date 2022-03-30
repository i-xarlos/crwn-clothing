import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

//import { getRedirectResult } from 'firebase/auth'
import {
  //signInWidthGoogleRedirect,
  createUserDocumentFromAuth,
  signInWithEmailAndPasswordFromAuth,
  signInWithGooglePopup,
} from '../../config/firebase/firebase.utils'

const defaultFormFields = {
  email: '',
  password: '',
  message: '',
}

const SignInForm = () => {
  const [state, setState] = useState({ ...defaultFormFields })

  //useEffect(async () => {
  //const response = await getRedirectResult(auth)
  //if (response) {
  //const userDocRef = await createUserDocumentFromAuth(response.user)
  //}
  //}, [])

  const { email, password, message } = state

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await signInWithEmailAndPasswordFromAuth(email, password)
      setState({ ...defaultFormFields })
    } catch (e) {
      let message = ''

      switch (e.code) {
        case 'auth/wrong-password':
          message = 'Incorrect password for email'
          break
        case 'auth/user-not-found':
          message = 'No user associated with this email'
          break
        default:
          message = e.message
      }

      setState({ ...state, message })
    }
  }

  const signInWidthGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup()
      await createUserDocumentFromAuth(user)
    } catch (e) {
      console.error(e.message)
    }
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

        {message && <span className='message'>* {message}</span>}

        <footer className='buttons'>
          <CustomButton type='submit'>Sign In </CustomButton>
          <CustomButton
            type='button'
            onClick={signInWidthGoogle}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
          {
            //<CustomButton
            //type='button'
            //onClick={signInWidthGoogleRedirect}
            //isGoogleSignInRedirect
            //>
            //Sign In with Google
            //</CustomButton>
          }
        </footer>
      </form>
    </div>
  )
}

export default SignInForm
