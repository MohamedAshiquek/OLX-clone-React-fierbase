import React,{useEffect,useState,useContext} from 'react';
import {collection,query,where,getDocs}from 'firebase/firestore'
import{fierstor}from '../../firebase/config'
import './View.css';
import { postCondext } from '../../store/PostCondext';
function View() {
  const [userDetails,setUserDetails]=useState()
  const {postDetails}=useContext(postCondext)
  const db=fierstor
  const userCollection=collection(db,'users')


  const getData=async()=>{
    const {userid} = postDetails 
    const filter= query(userCollection,where('id','==',userid))
     const data=await getDocs(filter).then((res)=>{
      res.forEach(doc=>{
        setUserDetails(doc.data())
      })
    })
  
  
   
     console.log("post",postDetails)
    

  }
  useEffect(()=>{
    
    getData()

   
  },[])
   console.log("user",userDetails)
  return (
  
    <div className="viewParentDiv">
          <div className="imageShowDiv">
        <img
          src={postDetails.imageUrl}
          alt=""
        />
      </div>
    
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>Category: {postDetails.category}</span>
          <p>Name: {postDetails.name}</p>
          <p>Descripton: {postDetails.descripton}</p>
          <span>Upload Date: {postDetails.date}</span>
        </div>
       { userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>Name: {userDetails.Username}</p>
          <p>Phone Number: {userDetails.phone}</p>
        </div>}
      </div>
     
     </div>
  );
}
export default View;
