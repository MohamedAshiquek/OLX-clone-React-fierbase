import React,{useEffect,useContext} from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost'
import {AuthContext,FirebaseCondext}from './store/Condext'
import Post from './store/PostCondext';



import Home from './Pages/Home';
import { onAuthStateChanged } from 'firebase/auth';
import{auth}from './firebase/config'


function App() {
  const {setUser}=useContext(AuthContext)
 //const {fierbase} = useContext(FirebaseCondext)
 useEffect(()=>{
onAuthStateChanged(auth,(user)=>{
  setUser(user)

  

},[])
  })
  return (
    <div className='App'>
<Post>
      <Router>

        
        <Route exact path='/'>
          <Home/>
        </Route>
          <Route path='/signup'>
          <Signup/>
          </Route>
          <Route path='/login'>
          <Login/>
          </Route>
          <Route path="/create">
          <Create/>
          </Route>
          <Route path="/post">
            <ViewPost/>
          </Route>
     
     
      </Router>
   </Post>
    </div>
  );
}


export default App
