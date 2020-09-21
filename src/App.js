import React from 'react'
import Routes from './routes'
import Navigation from './navbar'
import './App.css'
import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components'

const AppWrapper = styled.div`
  text-align: center;
`

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lustria&family=Maitree&display=swap');

  body {
    padding: 0;
    margin: 0;
    font-family: Maitree, serif;
    text-align: center;
    background: linear-gradient(${({ theme }) => theme.white}, ${({ theme }) =>
  theme.rose}) no-repeat center fixed;
    background-size: cover;

  },

  h1 {
    padding: 0;
    margin: 0;
    font-family: Josefin Sans, serif;
    text-align: center;
  },

  h3 {
    padding: 0;
    margin: 0;
    font-family: Lustria, serif;
    text-align: center;
  }
`

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Navigation />
      <Routes />
    </AppWrapper>
  )
}

export default App
