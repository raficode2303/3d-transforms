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
  return (
    <>
      <GlobalStyle />
      <Scene>
        <Panel theme={{ transform: 'translateZ(-200px)' }}>
          translateZ(-200px)
        </Panel>
      </Scene>
      <Scene>
        <Panel transformFunc={translateZ200}>translateZ(200px)</Panel>
      </Scene>
      <Scene>
        <Panel transformFunc='rotateX(45deg)'>rotateX(45deg)</Panel>
      </Scene>
      <Scene>
        <Panel transformFunc='rotateY(45deg)'>rotateY(45deg)</Panel>
      </Scene>
      <Scene>
        <Panel transformFunc='rotateZ(45deg)'>rotateZ(45deg)</Panel>
      </Scene>
    </>
  )
}

export default App
