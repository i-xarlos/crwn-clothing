import React from 'react'
import {
  BaseButton,
  InvertedButtonStyles,
  GoogleSignInStyles,
  GoogleSignInStylesRedirect,
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

const Button = ({ children, buttonType, ...props }) => {
  const CustomButton = getButton(buttonType)
  //const ele = { al: 'al', rel: 'lola' }['rel']
  //console.log('CustomButton', ele)
  return (
    <CustomButton alt='CustomButton' {...props}>
      {children}
    </CustomButton>
  )
}

export default Button
