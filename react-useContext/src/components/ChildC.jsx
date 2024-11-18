import React from 'react'
import { userContext,ThemeContext } from '../App';
import { useContext } from 'react';

const ChildC = () => {
    const user=useContext(userContext);
    const {theme,setTheme}=useContext(ThemeContext);
    function handleClick(){
        if(theme=='light')
            setTheme('dark')
        else
            setTheme('light')
    }
  return (
    <div>
       Data from parent:{user.name}
      <button onClick={handleClick}>Change Theme</button>
    </div>
  )
}

export default ChildC
