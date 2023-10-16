import { useState } from 'react'
import './styles/App.css'
import Header from './components/Header'
import GameArea from './components/GameArea'

function App() {
  return (
    <div className='main'>
      <Header />
      <GameArea />
    </div>
  )
}

export default App
