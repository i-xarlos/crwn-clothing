import React from 'react'
import './sign-in-out.styles.scss'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

export default function SignInOutPage() {
  return (
    <div className='sign-in-out'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}
