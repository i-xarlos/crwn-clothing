import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

type MessageBoxProps = {
  error: boolean
  showMessage: boolean
}

export const MessageBox = styled.span<MessageBoxProps>`
  display: block;
  font-size: 1.1rem;
  color: white;
  text-align: center;
  background: green;
  padding: 1rem 0;
  transition: 1s ease;

  ${({ error }) => error && `background-color:red;`}
  ${({ showMessage }) =>
    showMessage
      ? `opacity:1; height: auto;`
      : `opacity:0; height:0; padding: 0`}
`

export const LogoContainer = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 0.2s filter;
  &:hover {
    filter: brightness(200%);
  }
  img {
    margin-right: 1rem;
  }
  span {
    color: #666;
    font-size: 0.8rem;
    margin-top: 0.35rem;
  }
  @media screen and (max-width: 800px) {
    span {
      display: none;
    }
  }
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const OptionLink = styled(Link)`
  padding: 15px 15px;
  text-transform: uppercase;
  color: gray;
  transition: ease-in 0.3s color;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`

export const Container = styled.div`
  padding: 20px 40px;
`
