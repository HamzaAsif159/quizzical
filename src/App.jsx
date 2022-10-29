import reactLogo from './assets/react.svg'
import MainScreen from '../components/MainScreen'
import Question from '../components/Question.jsx'
import random from '../utils/Random'
import { useState, useEffect } from 'react'

export default function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [isEnded, setIsEnded] = useState(false)
  const [resultData, setResultData] = useState(0)
  const [questions, setQuestions] = useState([])
  const [newGame, setNewGame] = useState(false)

  useEffect(function(){
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
    .then(res => res.json())
    .then(data => {
      let dataarray = data.results
      setQuestions(dataarray.map(
        (e,index) => (
          {id: index+1,
          qs: e.question,
          answer: random([...e.incorrect_answers.map((e,index)=> (
            {id: index+1, choice: e, isCorrect: false, isSelected: false})),
            {id: 4, choice: e.correct_answer, isCorrect: true, isSelected: false}])})))
      })
      console.log(questions)
  },[newGame])

  let renderQuestions = questions.map((e,index) => (<Question key ={index} item ={e} /> ))

  function startGame(){
    setIsStarted(!isStarted)
  }

  

  return (
     isStarted ?
     renderQuestions:
     <MainScreen
      handleClick = {startGame}
    />
  )
}

