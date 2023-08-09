import React,{createContext, useState} from "react";
export const WishlistContext = createContext()

export const WishlistProvider =  ({children}) =>{
    const [wish,setWish] = useState([])
    return(
        <WishlistContext.Provider value={[wish,setWish]}>
            {children}
        </WishlistContext.Provider>
    )

}