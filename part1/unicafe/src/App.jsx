import { useState } from 'react'


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({good, neutral, bad, total}) => {
  return (
    <div>
      <h2>statistics</h2>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="total" value={total}/>
        <StatisticLine text="average" value={(good * 1 + bad * -1 ) / total}/>
        <StatisticLine text="positive" value={ (good / total) * 100 +'%'}/>
    </div>
  )
}

const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleClickGood} text="good" ></Button>
        <Button handleClick={handleClickNeutral} text="neutral" ></Button>
        <Button handleClick={handleClickBad} text="bad" ></Button>
      </div>
      <Statistics good={good} bad={bad} total={total} neutral={neutral}/>
    </div>
  )
}

export default App