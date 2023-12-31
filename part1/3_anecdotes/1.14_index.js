import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getRandomInt = (max) => Math.floor(Math.random() * max)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  
  const handleClickNext = () => {
    let rand = getRandomInt(anecdotes.length)
    while(rand === selected){
      rand = getRandomInt(anecdotes.length)
    }
    setSelected(rand)
  }
  const handleClickVote = () => {
    const pointsCopy = [...points]
    pointsCopy[selected]++
    setPoints(pointsCopy)
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p><button onClick={handleClickNext}>Next anecdote</button></p>
      <p>{props.anecdotes[selected]}</p>

      <p>Has {points[selected]} votes!</p>
      <button onClick={handleClickVote}>Vote</button>

      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[points.indexOf(Math.max(...points))]}</p>
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)