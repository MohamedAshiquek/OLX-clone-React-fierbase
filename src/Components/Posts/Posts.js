
import React,{useEffect,useState,useContext} from 'react';
import {fierstor}from '../../firebase/config'
import{collection,getDocs}from 'firebase/firestore'
import{useHistory}from 'react-router-dom'

import Heart from '../../assets/Heart';
import './Post.css';
import { postCondext } from '../../store/PostCondext';

function posts(){
  const db=fierstor
  const [products,setProducts]=useState([])
  const chanelCollection=collection(db,"products")
  const history=useHistory()
  const {setPostDetails} = useContext(postCondext)
  const getData=async()=>{
    const data=await getDocs(chanelCollection)
    const filterdData= data.docs.map((doc)=>({
      ...doc.data(),
      id:doc.id
    }


    ))
    setProducts(filterdData)
    
  }
  
  useEffect(()=>{
   getData()
   
  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map(product=>{
            
             return <div
            className="card" onClick={async()=>{
             await setPostDetails(product)
              history.push('/post')
            }}
          >
          
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.imageUrl} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.name}</p>
              <p className='description'>{product.descripton}</p>
            </div>
            <div className="date">
            <span>{product.date}</span>
            </div>
          </div>
          })
        }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        {products.map(product=>{
            
            return <div
           className="card" onClick={async()=>{
            await setPostDetails(product)
            history.push('/post')
           }}
         >
         
           <div className="favorite">
             <Heart></Heart>
           </div>
           <div className="image">
             <img src={product.imageUrl} alt="" />
           </div>
           <div className="content">
             <p className="rate">&#x20B9; {product.price}</p>
             <span className="kilometer">{product.category}</span>
             <p className="name">{product.name}</p>
             <p className='description'>{product.descripton}</p>
           </div>
           <div className="date">
             <span>{product.date}</span>
           </div>
         </div>
         })
       }
       
      </div>
    </div>
  );
}

export default posts;
