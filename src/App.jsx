import { useState } from 'react'
import './App.css'
import Title from './components/title'
import Brunch from './components/brunch'
import Drinks from './components/drinks'


function App() {
  return (
    <div className='wrapper'>
      <Title />
      <Brunch />
      <Drinks />
    </div>
  )
}

export default App;