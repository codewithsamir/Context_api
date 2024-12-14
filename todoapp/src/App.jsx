import React from 'react'
import Addtodo from "./components/Addtodo"
import Showtodo from "./components/Showtodo"

const App = () => {
  return (
    <div className="bg-slate-800 h-screen p-10 flex justify-center ">
      <div className="w-[600px]">
        <Addtodo/>
     <div className="mt-4">
     <Showtodo/>
     <Showtodo/>
     <Showtodo/>
     <Showtodo/>
     <Showtodo/>
     <Showtodo/>
     <Showtodo/>
     </div>
      </div>
    </div>
  )
}

export default App