import { useState } from "react";
import { Link } from 'react-router-dom';
//  i am the login button, not login screen


//the part that asks for login
function LoginButton(props){
    //in there will be the inputs n validate the user
    //i am the login button that also changes into settings
    //also the signup

    const[loggedIn, setLogged]=useState(false);
    const[buttonText, setButtonText]=useState(props.state);
    

    //set text depending on prop from app
  function setWord(){
    if (props.state=== "visitor"){
      return "LOGIN/SIGNUP";
    }
    else if(props.state==="customer"){
      return "settings";
    }
    else{
      return "something is broken";
    }


    return buttonText;
  }

    return(
      <Link to="/loginsignup"  className="btn btn-primary">
       {setWord()}
      </Link>
    );
}
export default LoginButton;