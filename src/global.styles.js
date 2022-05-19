import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Open Sans Condensed', sans-serif;
  margin: 0;
  @media screen and (max-width:800px){
    padding: 10px;
  }
}

a {
  text-decoration: none;
  outline: none;
}
`
