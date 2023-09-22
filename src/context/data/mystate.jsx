import React, { useState } from 'react'
import mycontext from './mycontext'
function Mystate(props) {
   const [mode, setMode] = useState('light'); 
   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="rgb(17, 24, 39)"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white"
    }
   }
  return (
    <mycontext.Provider value={{mode, toggleMode}}>
      {props.children}
    </mycontext.Provider>
  )
}

export default Mystate
