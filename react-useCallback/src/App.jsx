import { useState } from 'react'
import './App.css'
import Child from './components/Child'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleClick= useCallback(()=>{
    setCount(count+1);
  },[]);


  return (
    <div>
      <div>
        Count :{count} 
      </div>
      <br/>
      <button onClick={handleClick}>
        Increment
      </button>
      <br/>
      <br/> 
      <div>
        <Child 
        buttonName="Click Me"
        handleClick={handleClick}
        />
      </div>
    </div>
  )
}

export default App
//React.memo ->wrap ->component ->component  re-render will done only when props changed 

//if u are sending a function , then react memo wont be able to save you from re-rendering