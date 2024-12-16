import React, { useEffect, useState } from 'react'
import Addtodo from "./components/Addtodo"
import Showtodo from "./components/Showtodo"
import { Todoprovider } from './context/todocontext'

const App = () => {
  const [todos, settodos] = useState([])

  const addTodo = (todo)=>{
    const id = Date.now()
    settodos((prev)=>{
      let data = [...prev,{
        id:id,
        todo:todo,
        isCompleted:false
  
      } ]
      // console.log(data)

      return data;

  
    })


  }

  const updateTodo = (id,todo,isCompleted)=>{

    const updatedtodo = todos.map((todos)=> todos.id === id ? {...todos,todo,isCompleted} : todos)

    settodos(updatedtodo)
    console.log(updatedtodo)

    localStorage.setItem("todos",JSON.stringify(todos))

}


const deleteTodo = (id)=>{

  const deleteditem = todos.filter((todo)=>todo.id !== id)
  settodos(deleteditem)
}


useEffect(()=>{
  const tododata = localStorage.getItem("todos")
  const todos =  tododata ? JSON.parse(tododata) : []

  if(todos && todos.length>0){

    settodos(todos)
    console.log(todos)
  }

  
},[])

 useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos))

 },[todos])

  return (
    <Todoprovider  value={{todos,addTodo,updateTodo,deleteTodo}}>
    <div className="bg-slate-800 h-screen p-10 flex justify-center ">
      <div className="w-[600px]">
        <Addtodo/>
     <div className="mt-4">
     <Showtodo/>
   
     </div>
      </div>
    </div>
    </Todoprovider>
  )
}

export default App