import React from 'react'
import { CustomButtonContainer } from './button.styles'

const Button = ({ children, ...props }) => {
  return (
    <CustomButtonContainer alt='CustomButton' {...props}>
      {children}
    </CustomButtonContainer>
  )
}

export default Button
