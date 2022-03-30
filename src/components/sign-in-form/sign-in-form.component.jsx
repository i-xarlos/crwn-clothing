import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

//import { getRedirectResult } from 'firebase/auth'
import {
  auth,
  //createUserDocumentFromAuth,
  //signInWidthGoogleRedirect,
  signInWidthGoogle,
} from '../../config/firebase/firebase.utils'

const SignInForm = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    message: null,
  })

  //useEffect(async () => {
  //const response = await getRedirectResult(auth)
  //if (response) {
  //const userDocRef = await createUserDocumentFromAuth(response.user)
  //}
  //}, [])

  const handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setState({ ...state, email: '', password: '' })
    } catch (e) {
      console.error(e)
      setState({ ...state, message: e.message })
    }
  }

  const handleChange = e => {
    const { value, name } = e.target
    setState({ ...state, [name]: value })
  }

  const { email, password, message } = state

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
