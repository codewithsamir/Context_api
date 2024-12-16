import React from 'react'
import { useState } from 'react'
import { Todocontainer } from '../context/todocontext'

const Showtodo = () => {
  const {todos,updateTodo,deleteTodo} = Todocontainer()
   
    const [updatetodoid, setupdatetodoid] = useState(null)
    const [value, setvalue] = useState("")
    

    const updatetodohandle = (id,todo,isCompleted)=>{
      setupdatetodoid(id)
      
        setvalue(todo)
       
        if(updatetodoid === id){
        
          updateTodo(id,value,isCompleted)
          setupdatetodoid(null)
          
        }
    }

 
  return (
    <>
    {todos && todos.map((todo)=>(

<div key={todo.id} className='w-full border-2 border-white rounded-md flex items-center justify-between p-2 my-2'>
<div className="left flex items-center w-full">
<input type="checkbox" className='w-[25px] h-[25px] '
checked={todo.isCompleted}
onChange={()=>updateTodo(todo.id,todo.todo,!todo.isCompleted)}
/>
 
     {updatetodoid === todo.id ? 
     (
         <input type="text"  className='border-none border-bottom-2 border-red-500 text-xl w-full p-2 bg-transparent text-white outline-none'
         value={value}
         onChange={(e)=>setvalue(e.target.value)}
         />
     ) : 
     (
         <h2 className={` text-xl ml-2 ${todo.isCompleted ? "line-through text-green-500" : "text-white"}`}  >{todo.todo}</h2>
     ) }
     
 {/* line-through */}
</div>
<div className="box flex gap-2">
<button 
onClick={()=>updatetodohandle(todo.id,todo.todo,todo.isCompleted)}
className={`${updatetodoid === todo.id ? "bg-green-500" : "bg-orange-500"} p-2 text-white rounded-md`}>
 {updatetodoid === todo.id ? "save" : "update"}
 </button>
<button
onClick={()=>deleteTodo(todo.id)}
className='bg-red-500 p-2 text-white rounded-md'>delete</button>
</div>
</div>

    ))}
  
    </>
  )
}

export default Showtodo