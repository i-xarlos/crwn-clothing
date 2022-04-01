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
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 0.2s filter;
  &:hover {
    filter: brightness(150%);
  }
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
