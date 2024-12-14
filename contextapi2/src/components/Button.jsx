import React from 'react'
import { Darkmodecall } from '../context/Darkmodecontext'




const Button = () => {
  const {theme,Darkmode} = Darkmodecall()
 
  return (
    <div className='flex justify-center mt-4'>
        <button className={`bg-black p-2 text-white rounded-md mt-4
        dark:bg-white dark:text-black
        `}
       onClick={Darkmode}
        >{theme}</button>
    </div>
  )
}

export default Button