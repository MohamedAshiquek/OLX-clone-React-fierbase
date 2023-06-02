

import{initializeApp}from 'firebase/app'
import{getAuth}from 'firebase/auth'
import {getFirestore}from 'firebase/firestore'
import{getStorage,ref}from 'firebase/storage'


  const firebaseConfig = {

    apiKey:
  
    authDomain:....
    
    projectId:...
  
    storageBucket:....
  
    messagingSenderId:...
  
    appId:... 
  
    measurementId:...
  
  };
  const fier=initializeApp(firebaseConfig);

 const auth=getAuth(fier);
 const fierstor=getFirestore(fier);

 const storage=getStorage(fier)
 
 


  export {auth,fierstor,storage}
  export default fier
  
