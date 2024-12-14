import React from 'react'
import { useState } from 'react'

const Showtodo = () => {
    const [complete, setcomplete]  = useState(false)
    const [updatetodo, setupdatetodo] = useState(false)
    const [value, setvalue] = useState("hello world")
    

    const updatetodohandle = ()=>{
        setupdatetodo((prev)=>!prev)
    }
  return (
    <div className='w-full border-2 border-white rounded-md flex items-center justify-between p-2 my-2'>
       <div className="left flex items-center w-full">
       <input type="checkbox" className='w-[25px] h-[25px]'
       onChange={()=>setcomplete((prev)=>!prev)}
       />
        
            {updatetodo ? 
            (
                <input type="text" value={value} className='border-none text-xl w-full p-2 bg-transparent text-white outline-none'
                onChange={(e)=>setvalue(e.target.value)}
                />
            ) : 
            (
                <h2 className={`text-white text-xl ml-2 ${complete ? "line-through text-green-500" : ""}`}  >{value}</h2>
            ) }
            
        {/* line-through */}
       </div>
     <div className="box flex gap-2">
     <button 
     onClick={updatetodohandle}
     className={`${updatetodo ? "bg-green-500" : "bg-orange-500"} p-2 text-white rounded-md`}>
        {updatetodo ? "add" : "update"}
        </button>
     <button className='bg-red-500 p-2 text-white rounded-md'>delete</button>
     </div>
    </div>
  )
}

export default Showtodo