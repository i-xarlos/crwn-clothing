import styled from 'styled-components'
import {
  BaseButton,
  GoogleSignInStyles,
  GoogleSignInStylesRedirect,
  InvertedButtonStyles,
} from '../button/button.styles'

export const CollectionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 550px;
  align-items: center;
  position: relative;

  ${BaseButton}, ${GoogleSignInStyles}, ${GoogleSignInStylesRedirect}, ${InvertedButtonStyles} {
    position: absolute;
    top: calc(100% - 110px);
    width: 90%;
    z-index: 10;
    opacity: 0.7;
    display: none;
  }
  &:hover {
    .image {
      opacity: 0.8;
    }

    ${BaseButton}, ${GoogleSignInStyles}, ${GoogleSignInStylesRedirect}, ${InvertedButtonStyles} {
      opacity: 0.85;
      display: flex;
    }
  }
`

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const CollectionFooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
  font-size: large;
`

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`
