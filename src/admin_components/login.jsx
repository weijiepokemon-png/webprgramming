import { useState } from "react";

//the part that asks for login
function LoginButton(props){
    //in there will be the inputs n validate the user
    //i am the login button that also changes into settings
    //also the signup

    const[loggedIn, setLogged]=useState(false);
    const[buttonText, setButtonText]=useState(props.state);
    

    //set text depending on prop from app


    return(
      <button>
        {buttonText}
      </button>
    );
}
export default LoginButton;