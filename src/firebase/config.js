

import{initializeApp}from 'firebase/app'
import{getAuth}from 'firebase/auth'
import {getFirestore}from 'firebase/firestore'
import{getStorage,ref}from 'firebase/storage'


  const firebaseConfig = {

    apiKey: "AIzaSyB1zV8TUNMt_12c1H9FiBEfrhi28jDP2p4",
  
    authDomain: "react-70bed.firebaseapp.com",
    
    projectId: "react-70bed",
  
    storageBucket: "react-70bed.appspot.com",
  
    messagingSenderId: "225661914420",
  
    appId: "1:225661914420:web:33b7f5ec1da72b02e42961",
  
    measurementId: "G-588N0C7XK6"
  
  };
  const fier=initializeApp(firebaseConfig);

 const auth=getAuth(fier);
 const fierstor=getFirestore(fier);

 const storage=getStorage(fier)
 
 


  export {auth,fierstor,storage}
  export default fier
  
