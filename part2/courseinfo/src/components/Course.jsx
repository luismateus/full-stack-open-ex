const Header = ({ course }) => <h1>{course.name}</h1>

const Total = ({ sum }) => <p><b>Number of exercises {sum}</b></p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part}/>)}
    </div>
    
  )
}

const Course = ({course}) => {
  const total = course.parts.reduce((accumulator, part) => {
    return accumulator + part.exercises
  }, 0)
  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total sum={total} />
    </div>
  )
}

export default Course