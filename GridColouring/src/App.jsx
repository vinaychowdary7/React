import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [clickedBoxes, setClickedBoxes] = useState(Array(9).fill(false));
  const [deselectBoxes,setDeselectBoxes] = useState([]);

  const handleClick = (index) => {
    if (index === 4) return;
    setClickedBoxes((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
    setDeselectBoxes((prev)=>[...prev,index]);
  };
  useEffect(()=>{
    if(deselectBoxes.length===8){
      let delay=200;
      deselectBoxes.slice().reverse().forEach((boxIndex,i)=>{
        setTimeout(()=>{
          setClickedBoxes((prev)=>{
            const newState= [...prev];
            newState[boxIndex]=false;
            return newState;
          })
        },i*delay);
      })
      setTimeout(()=>setDeselectBoxes([]),8*delay);
    }
    
  },[clickedBoxes])

  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                 grid grid-cols-3 gap-4 w-96 h-96 p-2 border-2"
    >
      {Array.from({ length: 9 }, (_, i) =>
        i === 4 ? (
          <div key={i}></div> // Empty center box
        ) : (
          <div
            key={i}
            className={`border-2  cursor-pointer transition-colors ${
              clickedBoxes[i] ? "bg-green-500" : "bg-white"
            }`}
            onClick={() => handleClick(i)}
          ></div>
        )
      )}
    </div>
  );
}

export default App;
