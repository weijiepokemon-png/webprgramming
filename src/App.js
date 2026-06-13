import logo from './logo.svg'; //how to import graphics
import './App.css'; //how to import css
import { useState } from 'react';
import LoginButton from './admin_components/login';

//the main thing
function App() {
  //a method that returns a html element. only 1 parent that holds everything inside
  const [user, setUser]= useState("visitor");
  return (
    <>
    <div className="App">
      <h1>i am the app compoenent</h1>
      <h2>i need to create separate components for each part of the page n put them here</h2>
      <h3>THE VISITOR PAGE OF THE LOOKING AT ITEMS COMPONENT TO BE SET HERE</h3>
    </div>
    
    <LoginButton state={user} updaterMethod={setUser}/>

    
    </>

    
  );
}

export default App; //keep this line
