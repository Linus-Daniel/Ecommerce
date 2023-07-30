import React,{createContext, useState} from "react";
export const WishlistContext = createContext()

export const WishlistProvider =  ({children}) =>{
    // const [wish,setWish] = useState(false)
    const [id, setId] = useState(null)
    return(
        <WishlistContext.Provider value={[id,setId]}>
            {children}
        </WishlistContext.Provider>
    )

}