import { FC, ButtonHTMLAttributes } from 'react'
import {
  BaseButton,
  InvertedButtonStyles,
  GoogleSignInStyles,
  GoogleSignInStylesRedirect,
  LoadingSpinner,
} from './button.styles'

export enum BUTTON_TYPE_CLASES {
  base = 'base',
  google = 'google-sign-in',
  googleRedirect = 'google-sign-in-redirect',
  inverted = 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASES.base]: BaseButton,
    [BUTTON_TYPE_CLASES.google]: GoogleSignInStyles,
    [BUTTON_TYPE_CLASES.googleRedirect]: GoogleSignInStylesRedirect,
    [BUTTON_TYPE_CLASES.inverted]: InvertedButtonStyles,
  }[buttonType])

export type ButtonProps = {
  isLoading?: boolean
  buttonType?: BUTTON_TYPE_CLASES
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({
  children,
  isLoading = false,
  buttonType,
  ...props
}) => {
  const CustomButton = getButton(buttonType)
  return (
    <CustomButton title='CustomButton' disabled={isLoading} {...props}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  )
}

export default Button
