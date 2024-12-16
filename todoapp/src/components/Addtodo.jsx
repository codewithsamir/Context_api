import React, { useState } from 'react'
import { Todocontainer } from '../context/todocontext'

const Addtodo = () => {
  const {addTodo} = Todocontainer()
  const [value, setvalue] = useState("")
  return (
    <div className='flex items-center border-2 border-white rounded-lg overflow-hidden'>
        <input type="text" placeholder='enter your todo' className='p-2 text-xl border-none bg-transparent w-full text-white' 
        value={value}
        onChange={(e)=>setvalue(e.target.value)}
        />
        <button className='bg-green-500 w-[100px] p-2 text-white rounded-md border-none '
        onClick={()=>{
          if(value === ""){
            return alert("please add some todos")
          }
          addTodo(value)
        setvalue("")
        }}
        
        >Add</button>
    </div>
  )
}

export default Addtodo