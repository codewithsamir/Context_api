import React, { useContext } from 'react'
import Usercontext from '../context/Usercontext'

const Footer = () => {
    const logo = useContext(Usercontext) 
  return (
    <div className='p-4 bg-blue-400 text-center text-white'>
        <div className="logo text-3xl">
           {logo}
        </div>
        <p>all right reserved by context api</p>
    </div>
  )
}

export default Footer