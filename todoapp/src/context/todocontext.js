import { useContext } from "react";
import { createContext } from "react";

const todoContext = createContext({
    todos:[{
        id:1,
        todo:"wakeup ",
        isCompleted:false,
    }],
   
    addTodo:()=>{},
    updateTodo:()=>{},
    deleteTodo:()=>{}
});
export default todoContext;

export const Todoprovider = todoContext.Provider;

export const Todocontainer = ()=> useContext(todoContext);
