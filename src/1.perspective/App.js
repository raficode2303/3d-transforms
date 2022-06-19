import React from 'react'
import { nanoid } from 'nanoid'

import { Scene, Panel } from './Perspective.styles'

function App() {
  console.log('Array.from of 10: ', Array.from(Array(10).keys()))
  const NumberOfItems = 11

  const getRandomHexColor = () => `#${Math.random().toString(16).slice(2, 8)}`
  console.log('getRandomHexColor: ', getRandomHexColor())
  return (
    <Scene>
      {[...Array(NumberOfItems).keys()].map((_item) => (
        <Panel key={nanoid()} bgColor={getRandomHexColor()} />
      ))}
    </Scene>
  )
}

export default App
