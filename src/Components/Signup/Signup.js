import React, { useState } from 'react';


import Logo from '../../olx-logo.png';
import './Signup.css';

import {auth,fierstor} from '../../firebase/config'
import {createUserWithEmailAndPassword,updateProfile}from 'firebase/auth'
import { collection,addDoc} from 'firebase/firestore'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

//import { FirebaseCondext } from '../../store/firebaseCondext';



export default function Signup() {
  const history=useHistory()
  const [Username,setUsername]=useState('')
  const [Email,setEmail]=useState('')
  const[Phone,setPhone]=useState('')
  const[Password,setPassword]=useState('')
  const db=fierstor;
  //const {fi}=useContext(FirebaseCondext)

  // const handilSubmit=(e)=>{
  //   e.preventDefault()
  //   console.log(fi)
  // }
  
  const handilSubmit = async(e)=>{
    e.preventDefault()
    try{
    
    const {user}=await createUserWithEmailAndPassword(auth ,Email,Password)
    //console.log(`User ${user.uid} created`)
    await updateProfile(user,{
    
      displayName:Username
    })
    
      
    
   .then(async()=>{
    const docRuf=await addDoc(collection(db,"users"),{
      id:auth.currentUser.uid,
      Username:Username,
      phone:Phone
    })
    
    .then (()=>{
      history.push("/")
      
    })
  
    console.log(auth.currentUser.uid)
    
   });
   
   
   
    }catch(err){
      console.log(err)
   }
    
   console.log(auth)
  
  
   // console.log(auth.currentUser)
    

    // await createUserWithEmailAndPassWord(auth , Email, Password).then((result)=>{
    //   result.user.updateaprofile({displayName:Username})
    // })

    // fi.auth().createUserWithEmailAndPassWord(Email,Password).then((result)=>{
    //   result.user.updateProfile({dipalayName:Username})
    // })
    
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='logo'></img>
        <form onSubmit={handilSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={Username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
          
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
         
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={Phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
          
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
           
          />
          <br />
          <br />
          <button onSubmit={handilSubmit}>Signup</button>
        </form>
        <a href='/login'>Login</a>
      </div>
    </div>
  );
}
