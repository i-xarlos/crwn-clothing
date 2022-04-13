import { useState, useEffect } from 'react'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import './sign-up-form.styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { emailSignUp } from '../../store/user/user.actions'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [state, setState] = useState({
    ...defaultFormFields,
  })
  const dispatch = useDispatch()

  const { displayName, email, password, confirmPassword } = state

  const resetFormFields = () => {
    setState(defaultFormFields)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("password don't match")
      return
    }

    dispatch(emailSignUp(email, password, displayName))
    resetFormFields()

    //setState({
    //...defaultFormFields,
    //message: 'User has been created',
    //})
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
        <Button type='submit'>Sign up</Button>
      </form>
    </div>
  )
}
export default SignUpForm
