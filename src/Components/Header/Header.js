import React,{useContext} from 'react';
import {useHistory} from 'react-router-dom'

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/Condext';
import { signOut } from 'firebase/auth';
import{auth}from '../../firebase/config'
function Header() {
  const history=useHistory()
  const {user} =useContext(AuthContext)
  console.log(user)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>{
          history.push('/')
        }}>
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>

        <div className="loginPage">
      <span onClick={()=>{
        history.push('/login')

      }}>{user ? user.displayName : 'login'}</span>
          <hr />
        </div>
       {user && <span onClick={()=>{
        signOut(auth).then(()=>{
         history.push('/login')

        })

       }}>Logout</span>} 

        <div className="sellMenu" onClick={()=>{
          history.push('/create')
        }}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Header;
