import React from 'react'
import {
  BaseButton,
  InvertedButtonStyles,
  GoogleSignInStyles,
  GoogleSignInStylesRedirect,
  LoadingSpinner,
} from './button.styles'

export const BUTTON_TYPE_CLASES = {
  base: 'base',
  google: 'google-sign-in',
  googleRedirect: 'google-sign-in-redirect',
  inverted: 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASES.base) =>
  ({
    [BUTTON_TYPE_CLASES.base]: BaseButton,
    [BUTTON_TYPE_CLASES.google]: GoogleSignInStyles,
    [BUTTON_TYPE_CLASES.googleRedirect]: GoogleSignInStylesRedirect,
    [BUTTON_TYPE_CLASES.inverted]: InvertedButtonStyles,
  }[buttonType])

const Button = ({ children, isLoading = false, buttonType, ...props }) => {
  const CustomButton = getButton(buttonType)
  return (
    <CustomButton alt='CustomButton' disabled={isLoading} {...props}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  )
}

export default Button
