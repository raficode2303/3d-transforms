import React from 'react'
import { useState } from 'react'
import { Scene, Card, CardFace, GlobalStyle } from './CardFlip.styles'

const App = () => {
  const [isClicked, setIsClicked] = useState(() => false)
  const [isHover, setIsHover] = useState(() => false)
  return (
    <>
      <GlobalStyle />
      <Scene>
        <Card
          isFlipped={isHover}
          onMouseOver={() => setIsHover((prev) => !prev)}
        >
          <CardFace color={'red'} data-value='♦7'>
            &diams;
          </CardFace>
          <CardFace bgColor={'blue'} isRotate={true}></CardFace>
        </Card>
        <p>hover To Flip!</p>
      </Scene>
      <Scene>
        <Card
          isFlipped={isClicked}
          onClick={() => setIsClicked((prev) => !prev)}
        >
          <CardFace color={'black'} data-value='♣2'>
            &clubs;
          </CardFace>
          <CardFace isRotate={true}></CardFace>
        </Card>
        <p>click To Flip!</p>
      </Scene>
    </>
  )
}

export default App
