import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <>
      <p>{props.part1} {props.ex1}</p>
      <p>{props.part2} {props.ex2}</p>
      <p>{props.part3} {props.ex3}</p>
    </>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises: {props.ex1 + props.ex2 + props.ex3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const ex1 = 10
  const ex2 = 7
  const ex3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} ex1={ex1} ex2={ex2} ex3={ex3}/>
      <Total ex1={ex1} ex2={ex2} ex3={ex3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))