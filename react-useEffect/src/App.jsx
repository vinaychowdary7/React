
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [total,setTotal]=useState(1);
  //first ->side-effect function
  //second ->clean-up function
  //third ->comma seperated dep list

  //var1
  //runs on every render

  // useEffect(() => {
  //   alert("I will run on each render")
  // })

  //var2
  //runs on onlyfirst render

  //  useEffect(()=>{
  //   alert("I will run on first render")
  //  },[])

  //var 3
  
  // useEffect(()=>{
  //   alert("I will run when count is updated")
  // },[count])

  //var4 multipe dependencies
  // useEffect(()=>{
  //   alert("Updated")
  // },[count,total])

  //var 5 let's add cleanup function
  // useEffect(()=>{
  //   alert("Count is updated")
  //   return ()=>{
  //     alert("count is unmounted from ui")
  //   }
  // },[count])

  function handleCount() {
    setCount(count + 1);
  }

  function handleTotal(){
    setTotal(total+1);
  }

  return (
    <div>
      <button onClick={handleCount}>
        Update Count
      </button>
      <br />
      Count total :{count}
      <br/>
      <button onClick={handleTotal}>
        Update Total
      </button>
      <br />
      Total count :{total}
    </div>
  )
}

export default App
