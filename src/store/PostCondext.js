import {Children, createContext,useState} from 'react'

export const postCondext=createContext(null)

function Post({children}){
    const [postDetails,setPostDetails]=useState()
    return(
        <postCondext.Provider value={{postDetails,setPostDetails}}>
           {children}
           
        </postCondext.Provider>
    )
      

    
}
export default Post
