
import { useState } from 'react'
import './App.css'
import Logout from './components/Logout';
import Login from './components/Login';

function App() {
  const [isLoggedIn,setLoggedIn]=useState(false);
 
  // if(!isLoggedIn){
  //   return(
  //     <Login/>
  //   )
  // }
  function handleState(){
    setLoggedIn(!isLoggedIn)
    
  }

  return(
    <div>
      <h1>Welcome everyone to react dev course</h1>
      <div>
        {isLoggedIn ? <Logout state={handleState}/> : <Login state={handleState}/>}
      </div>
    </div>
  )


  // return(
  //   <div>
  //     {isLoggedIn?<Logout/>:<Login/>}
  //   </div>
  // )

  // if(isLoggedIn){
  //   return(
  //     <Logout/>
  //   )
  // }
  // else{
  //   return(
  //     <Login/>
  //   )
  // }
}

export default App
