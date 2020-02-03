import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = () => {
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  )
}

const Header2 = () => {
  return (
    <div>
      <h2>statistics</h2>
    </div>
  )
}

const Good = (props) => {
  return (
    <div>
      <p>good {props.number}</p>
    </div>
  )
}

const Neutral = (props) => {
  return (
    <div>
      <p>neutral {props.number}</p>
    </div>
  )
}

const Bad = (props) => {
  return (
    <div>
      <p>bad {props.number}</p>
    </div>
  )
}

const Avg = (props) => {
  const g = props.good
  const n = props.neutral
  const b = props.bad
  if((g+n+b) === 0) {
    return (
      <div>
        <p>average 0</p>
      </div>
    )
  }
  return (
    <div>
      <p>average {(g-b)/(g+n+b)}</p>
    </div>
  )
}

const Positive = (props) => {
  const g = props.good
  const n = props.neutral
  const b = props.bad
  if((g+n+b) === 0) {
    return (
      <div>
        <p>positive 0%</p>
      </div>
    )
  }
  return (
    <div>
      <p>positive {100*(g/(g+n+b))}%</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header />
      <button onClick={() => setGood(good +1)} >
        good
      </button>
      <button onClick={() => setNeutral(neutral +1)} >
        neutral
      </button>
      <button onClick={() => setBad(bad +1)} >
        bad
      </button>
      <Header2 />
      <Good number={good} />
      <Neutral number={neutral} />
      <Bad number={bad} />
      <Avg good={good} neutral={neutral} bad={bad} />
      <Positive good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
