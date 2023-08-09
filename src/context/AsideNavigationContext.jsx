import React,{createContext, useState} from "react";
export const AsideNavigationContext = createContext([])

export const AsideNavigationProvider =  ({children}) =>{
    const [navigate,setNavigate] = useState([])
    return(
        <AsideNavigationContext.Provider value={[navigate,setNavigate]}>
            {children}
        </AsideNavigationContext.Provider>
    )

}