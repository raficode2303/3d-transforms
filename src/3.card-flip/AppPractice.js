import React from 'react'
import { useState } from 'react'
import { Scene, Card, CardFace } from './CardFlipPractice.styles'
function App() {
  const [isFlipped, setIsFlipped] = useState(() => false)
  return (
    <Scene>
      <Card isFlipped={isFlipped} onClick={() => setIsFlipped((prev) => !prev)}>
        <CardFace side='front'>Front</CardFace>
        <CardFace side='back'>Back</CardFace>
      </Card>
      <p>click to flip!</p>
    </Scene>
  )
}

export default App
