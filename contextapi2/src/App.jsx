import React, { useState } from 'react'
import Button from './components/Button'
import { Darkmodeprovider } from './context/Darkmodecontext'

const App = () => {
  const [theme, settheme]=useState("light");

  const Darkmode = ()=>{
    if(theme==="light"){
      settheme("dark")

    }
    else if(theme==="dark"){
      settheme("ligth")

    }
    document.documentElement.classList.toggle("dark")
  }


  return (
<Darkmodeprovider value = {{theme, Darkmode}}>
    <div className='dark:bg-blue-900 p-4 h-screen'>
      <h1 className='p-2  text-center text-4xl dark:text-white
      '>hello context api project (darkmode)</h1>
      <Button />
    </div>
    </Darkmodeprovider>

  )
}

export default App