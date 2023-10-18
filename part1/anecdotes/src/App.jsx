import { useState } from 'react'

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const randomNumberInRange = (min, max) => {
  // 👇️ get number between min (inclusive) and max (inclusive)
  let rng = Math.floor(Math.random() * (max - min + 1)) + min;
  return rng
}

const Display = ({text}) => {
  
  return (
    <div>
      {text}
    </div>
  )
}

const getMaxIndex = (array) => {
  const max = Math.max(...array);
  return array.indexOf(max);
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0))

  const handleClickGenerate = () => {
    let rng = randomNumberInRange(1, anecdotes.length - 1)
    setSelected(rng)
  }

  const handleClickVote = () => {
    const copy = [...voted]
    copy[selected]+=1
    setVoted(copy)
  }
  

  return (
    <div>
      <h1>Anedoct of the day</h1>
      <Display text={anecdotes[selected]}/>
      <Display text={"has " + voted[selected] + " votes"}></Display>
      <Button text="generate random number" handleClick={handleClickGenerate}/>
      <Button text="vote" handleClick={handleClickVote}/>

      <h1>Anedoct with most votes</h1>
      <Display text={anecdotes[getMaxIndex(voted)]}/>
      <Display text={"has " + voted[getMaxIndex(voted)] + " votes"}></Display>
    </div>
  )
}

export default App