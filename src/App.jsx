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
  },[newGame])

  console.log(questions)

  function selectChoice(qs,qsId){
    if(!isEnded) {
      setQuestions(prev => prev.map(e => {
        return e.id===qs? {...e,answer:e.answer.map(ele => (ele.id===qsId? {...ele, isSelected: !ele.isSelected} : {...ele, isSelected:false})) } : e}))
    }
  }

  let renderQuestions = questions.map((e,index) => (
    <Question 
     key ={index}
     item ={e} 
     handleClick = {selectChoice}
     end = {isEnded}
     /> 
     ))
    

  function endGame() {
    setIsEnded(true)
    questions.forEach(qs => qs.answer.forEach(choice => {
      if (choice.isCorrect && choice.isSelected) {
        setResultData(prev => prev+1)
      }
    }))
  }


  function startGame(){
    setIsStarted(!isStarted)
    setResultData(0)
  }

  function newGameFunc(){
    setResultData(0)
    setNewGame(!newGame)
    setIsEnded(!isEnded)
 
  }
  

  return (
     isStarted ?
     <main>
      {renderQuestions}
      <div className='flex items-center justify-center p-4'>
      {isEnded && <p className= "text-primary mr-3" >You scored {resultData}/5 correct answers! </p>}
      <button className="text-white bg-btn py-4 px-12 rounded hover:bg-blue-600 text-center"  
      onClick={isEnded? newGameFunc : endGame }>{isEnded? 'Play Again' : 'Check answers'}</button>
      </div>
     
     </main>
     
     :
     <MainScreen
      handleClick = {startGame}
    />
  )
}

