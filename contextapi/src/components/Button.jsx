import React, { useContext } from 'react'


const Button = ({text,className,...props}) => {
    
  return (
    <div>
        <button className={`bg-red-500 p-2 text-white rounded-md mt-4 ${className}`}
        {...props}
        >{text}</button>
    </div>
  )
}

export default Button