import React, { Fragment, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useState } from 'react';
import{useHistory}from 'react-router-dom'


import{AuthContext}from '../../store/Condext'
import {storage}from '../../firebase/config'
import{uploadBytesResumable,getDownloadURL,ref}from 'firebase/storage'
import { addDoc,collection } from 'firebase/firestore';
import { fierstor,auth } from '../../firebase/config';



const Create = () => {
 

  const {user}= useContext(AuthContext)
  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [descripton,setDescripton]=useState('')
  const [image,setImage]=useState(null)
  const date=new Date()
  const db=fierstor;
  const history=useHistory()
 
  const handilSubmit =async(e)=>{
      e.preventDefault();
      
   
         
        


      const metadata = {
        contentType: 'image/jpeg'
      };
      
const  storageRef = ref(storage, 'images/'+ image.name)

const uploadTask =uploadBytesResumable(storageRef, image, metadata);
uploadTask.on('state_changed',
 (snapshot)=>{
  const progress=(snapshot.bytesTransferred / snapshot.totalBytes)*100;
  console.log('Upload is ' + progress + '% done');
    switch (snapshot.state){
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
         

    }
   
  }),
  (error)=>{
    switch (error.code) {
      case 'storage/unauthorized':
    
        break;
      case 'storage/canceled':
      
        break;

      

      case 'storage/unknown':
      
        break;
    }
  }
 

    getDownloadURL(uploadTask.snapshot.ref).then(async(imageUrl) => {
      console.log('File available at', imageUrl);
     
 
    
    
       
    
      
        const productss= await addDoc(collection(db,"products"),{
        name,
        category,
        price,
        descripton,  
        userid:auth.currentUser.uid,
        date:date.toDateString(),
        imageUrl,
       
      
        })
        console.log(productss)
        history.push('/')
      })
     
    
  
    


  

      }
  

 


 
  
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
             
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
             
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" 
            type="number" 
            id="fname" 
            name="Price" 
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            />
         
            <br />
          </form>
          <br />
          <label htmlFor="fname">Descripton</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Descripton"
              value={descripton}
              onChange={(e)=>setDescripton(e.target.value)}
             
            />
            <br/>
           

          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
        
            <br />
            <input 
            type="file" 
            onChange={(e=>setImage(e.target.files[0]))}
            />
            <br />
            <button onClick={handilSubmit} className="uploadBtn">upload and Submit</button>
         
        </div>
      </card>
    </Fragment>

    );
    

    };
  
  
export default Create;
