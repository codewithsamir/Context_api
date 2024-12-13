import React, { useContext } from 'react'
import Usercontext from '../context/Usercontext'


const Header = ()=> {
    const logo = useContext(Usercontext)
  return (
    <div className='flex justify-between p-4 items-center bg-blue-400 text-white'>
        <div className="logo text-3xl">{logo}</div>

        <nav>
            <ul className='flex gap-5'>
                <li>home</li>
                <li>about</li>
                <li>contact us</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header