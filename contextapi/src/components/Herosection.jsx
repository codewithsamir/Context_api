import React, { useContext } from 'react'
import Usercontext from '../context/Usercontext'
import Button from './Button'

const Herosection = () => {
    const {logo,count,setcount} = useContext(Usercontext)
  return (
    <div className='text-center min-h-[85vh]'>
        <h1 className='text-4xl p-5'>hello {logo}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam cum ipsum odio hic velit aspernatur dolorum mollitia recusandae quasi quo.</p>
        <h1 className='text-3xl text-red-500 '>{count}</h1>
        <Button text="increase" onClick={()=>setcount((prev)=>prev+1)}/>
        <Button text="decrease" className="bg-orange-500"  onClick={()=>setcount((prev)=>prev-1)}/>
        <Button text="nutral" className="bg-green-500" onClick={()=>setcount(0)}/>
    </div>
  )
}

export default Herosection