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
export const LoadingSpinner = styled.div`
  display: inline-block;
  margin-top: 8px;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`
