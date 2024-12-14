import React from 'react'

const Addtodo = () => {
  return (
    <div className='flex items-center border-2 border-white rounded-lg overflow-hidden'>
        <input type="text" placeholder='enter your todo' className='p-2 text-xl border-none bg-transparent w-full text-white' />
        <button className='bg-green-500 w-[100px] p-2 text-white rounded-md border-none'>Add</button>
    </div>
  )
}

export default Addtodo