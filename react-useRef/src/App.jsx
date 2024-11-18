
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  // const [count,setCount]=useState(0);
  //  let val=useRef(0);
  //  let btnRef=useRef();
  // function handleClick(){
  //    val.current=val.current+1;
  //    console.log("val :",val.current);
  //   setCount(count+1);
  // }
  // useEffect(()=>{
  //   console.log("render is done",val);

  // })
  // function changeColor(){
  //   console.log("color render");
  //   btnRef.current.style.backgroundColor="red";
  // }

  let timerRef=useRef(null);
  const [time,setTime]=useState(0);

  function startTimer(){
    timerRef.current=setInterval(()=>{
      setTime(time=>time+1)
    },10);
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current=null;
  }

  function resetTimer(){
    stopTimer();
    setTime(0);
  }


  return (
    <div>

      <h1>StopWatch:{time/100}seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br/>
      <br/>

      <button onClick={stopTimer}>
        Stop
      </button>
      <br/>
      <br/>

      <button onClick={resetTimer}>
        Reset
      </button>
      <br/>
      <br/>

      {/* <button
      ref={btnRef} 
      onClick={handleClick}>
        Increment
      </button>
      <br/>
      <br/>
      <button 
       onClick={changeColor}
      >
        Change the color of 1st button
      </button>
      <br/>
      <div>
        Count: {count}
      </div> */}
    </div>
  )
}

export default App
