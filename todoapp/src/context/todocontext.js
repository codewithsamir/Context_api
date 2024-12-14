import { useContext } from "react";
import { createContext } from "react";

const todoContext = createContext({
    todo:[],
    isComplete:false,
    addTodo:()=>{},
    updateTodo:()=>{},
    deleteTodo:()=>{}
});
export default todoContext;

export const Todoprovider = todoContext.Provider;

export const Todocontainer = ()=>{
    return useContext(todoContext)
}