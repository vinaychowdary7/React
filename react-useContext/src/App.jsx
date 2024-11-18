
import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA';
import { useState } from 'react';
import ChildC from './components/ChildC';
//step:1 create Context
 const userContext=createContext();
//step:2 wrap all the child inside a provider
//step:3 pass value 

const ThemeContext=createContext();
function App() {
  const [user,setUser]=useState({name:"Vinay"})
  const [theme,setTheme]=useState('light')
  return (
    <div>
      <userContext.Provider value={user}>
        <ThemeContext.Provider value={{theme,setTheme}}>
          <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
            <ChildA/>
          </div>
        
        </ThemeContext.Provider>
      </userContext.Provider>
    </div>
    // <div>
    //   <userContext.Provider value={user}>
    //     <ChildA/>
    //   </userContext.Provider>
    // </div>
  )
}

export default App
export {userContext,ThemeContext}
