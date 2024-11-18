import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
function App() {
  const [count,setCount]=useState(0);

  function handleClick(){
    setCount(count+1);
  }
  return (
    <div>
      <Button incrementCount={handleClick} text="Click me" >
        <h1>{count}</h1>
      </Button>
      <Card name="Vinay">
        <h1>Best WEB DEV Course</h1>
        <p>Trying to be consistent in this</p>
        <p>Will compltete the couse in hours</p>
      </Card>
      <Card children="nenu oka children ni">
        Hello Raa,Ela unav ra
      </Card>
    </div>
  )
}

export default App
