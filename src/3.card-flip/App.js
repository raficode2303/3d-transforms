import React from 'react'
import { useState } from 'react'
import { Scene, Card, CardFace } from './card-flip.styles'

const App = () => {
  const [isClicked, setIsClicked] = useState(() => false)
  const [isHover, setIsHover] = useState(() => false)
  return (
    <>
      <Scene>
        <Card
          isFlipped={isHover}
          onMouseOver={() => setIsHover((prev) => !prev)}
        >
          <CardFace bgColor={'red'}>Front</CardFace>
          <CardFace bgColor={'blue'} isRotate={true}>
            Back
          </CardFace>
        </Card>
        <p>hover To Flip!</p>
      </Scene>
      <Scene>
        <Card
          isFlipped={isClicked}
          onClick={() => setIsClicked((prev) => !prev)}
        >
          <CardFace bgColor={'red'}>Front</CardFace>
          <CardFace bgColor={'blue'} isRotate={true}>
            Back
          </CardFace>
        </Card>
        <p>click To Flip!</p>
      </Scene>
    </>
  )
}

export default App
