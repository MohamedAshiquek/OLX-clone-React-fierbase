import React from 'react';
import App from './App';
import { FirebaseCondext } from './store/Condext'
import Condext from './store/Condext';
import fier from './firebase/config'
import{createRoot}from 'react-dom/client'
const condainer=document.getElementById("root")
const root=createRoot(condainer)
root.render(
    <FirebaseCondext.Provider value={{fier}}>
      <Condext>
       <App/>
       </Condext>
    </FirebaseCondext.Provider>
    );