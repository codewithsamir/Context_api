import React, { useContext } from 'react'
import Usercontext from '../context/Usercontext'

const Herosection = () => {
    const logo = useContext(Usercontext)
  return (
    <div className='text-center min-h-[85vh]'>
        <h1 className='text-4xl p-5'>hello {logo}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam cum ipsum odio hic velit aspernatur dolorum mollitia recusandae quasi quo.</p>
    </div>
  )
}

export default Herosection