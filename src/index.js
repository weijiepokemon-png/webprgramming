import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //import css
import App from './App'; //import app component
import reportWebVitals from './reportWebVitals';

import { AppProvider } from './userHandling_component/globalVar'; //import the global variables
import AuthProvider from './userHandling_component/newAuthContext'; //authentication provider wraps the whole all including global variables provider

//this is root file js============================================================
//it holds a app component
const root = ReactDOM.createRoot(document.getElementById('root')); //get the root element by links from the imports
root.render(
  //put the app in the app provider global field
  <React.StrictMode>
    
    <AppProvider>
       <App />
        </AppProvider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
