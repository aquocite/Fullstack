import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.ex.name} {props.ex.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
        {props.parts.map(part => <Part key={part.id} ex={part} />)}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total of {props.parts.map(part => part.exercises).reduce((s, p) => (s + p))} exercises</p>
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

export default Course
