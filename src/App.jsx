import reactLogo from './assets/react.svg'
import MainScreen from '../components/MainScreen'
import Mcqs from '../components/Mcqs.jsx'
import { useState, useEffect } from 'react'

function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [isEnded, setIsEnded] = useState(false)
  const [resultData, setResultData] = useState(0)


  function startGame(){
    setIsStarted(!isStarted)
    console.log(isStarted)
  }

  return (
     isStarted ? 
     <Mcqs /> :
     <MainScreen 
     handleClick = {startGame} />
  )
}

export default App
