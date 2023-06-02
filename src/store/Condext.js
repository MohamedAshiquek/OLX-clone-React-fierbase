import { createContext, useState } from "react";



export const FirebaseCondext= createContext(null)
export const AuthContext= createContext(null)
export default   function Condext ({children}){
    const[user,setUser]= useState(null)
    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
       
    
}