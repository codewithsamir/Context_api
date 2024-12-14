import { createContext, useContext } from "react";

const Darkmodecontext = createContext({
    theme:"light",
    Darkmode:()=>{},
})

export default Darkmodecontext;

export const  Darkmodeprovider = Darkmodecontext.Provider;


export const Darkmodecall = ()=>{
    return useContext(Darkmodecontext);
}

