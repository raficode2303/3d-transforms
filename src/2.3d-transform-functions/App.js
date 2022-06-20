import React from 'react'
import { Scene, Panel } from './3d-transform-functions.styles'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    background-color: yellow;
    border: 2px solid blue;

  }
`

const App = () => {
  const translateZ200 = 'translateZ(200px)'
  const theme = { transform: 'translateZ(-200px)' }

  return (
    <>
      <GlobalStyle />
      <Scene>
        <ThemeProvider theme={theme}>
          <Panel>translateZ(-200px)</Panel>
        </ThemeProvider>
        <p>made with ThemeProvider </p>
      </Scene>
      <Scene>
        <Panel transformFunc={translateZ200}>translateZ(200px)</Panel>
        <p style={{ marginTop: '60px' }}>made with className</p>
      </Scene>
      <Scene>
        <Panel>rotateX(45deg)</Panel>
        <p>made with theme.defaultProps</p>
      </Scene>
      <Scene>
        <Panel transformFunc='rotateY(45deg)'>rotateY(45deg)</Panel>
        <p>made with className</p>
      </Scene>
      <Scene>
        <Panel transformFunc='rotateZ(45deg)'>rotateZ(45deg)</Panel>
        <p style={{ marginTop: '40px' }}>made with className</p>
      </Scene>
    </>
  )
}

export default App
