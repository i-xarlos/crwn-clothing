import styled from 'styled-components'

//const getButtonStyles = props => {
//if (props.isGoogleSignIn) {
//return googleSignInStyles
//}
//if (props.isGoogleSignInRedirect) {
//return googleSignInStylesRedirect
//}
//return props.isInverted ? invertedButtonStyles : buttonsStyles
//}

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 55px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  border: 1px solid white;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

export const InvertedButtonStyles = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`

export const GoogleSignInStyles = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  border: 1px solid white;
  &:hover {
    background-color: white;
    color: #4285f4;
    border: 1px solid #4285f4;
  }
`

export const GoogleSignInStylesRedirect = styled(BaseButton)`
  background-color: red;
  color: white;
  border: 1px solid white;
  &:hover {
    background-color: white;
    color: #4285f4;
    border: 1px solid #4285f4;
  }
`
