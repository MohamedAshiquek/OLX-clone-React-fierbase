import React from 'react';


import Logo from '../../olx-logo.png';
import './Login.css';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../firebase/config'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';


 export default function Login() {
  const [Email,setEmail]=useState('');
  const [Password,setPassword]=useState('');
  const history=useHistory()
  const handileLogin=async(e)=>{
    e.preventDefault()
    
         await signInWithEmailAndPassword(auth ,Email,Password).then(()=>{
           history.push('/')
            
          })
          
            
            
          
      
    .catch((error)=>{
      const errorcod=error.code;
      const errormassage=error.massage
      alert(errormassage)
      
    })
  

  }

  
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handileLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
           
          />
          <br />
          <br />
          <button onSubmit={handileLogin}>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

