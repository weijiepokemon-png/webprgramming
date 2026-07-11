//this is the login n signup page
import HomeButton from "../visitor_components/homeButton";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { useAuth } from "./newAuthContext";
import LogOutButton from "./logoutButton";

function LoginSignup(){
    //at the top is the home button
    // in the center is the login inputs

    const [input,setinput]=useState({username:"",password:"",});
let [username,setUsername]=useState();
let [password,setPassword]=useState();

const auth=useAuth();
  const navigate = useNavigate(); 
  
const logDataIn=()=>{
   // console.log('log data in')
    
    const data={
        username,password
    };
    console.log(data);

    

    const handlesubmitevent=(e)=>{
        //e.preventDefault();
        //console.log("running handlesubmitevent method");
  setinput({username: username,password:password,}); 
     //console.log(input);

        //ensure string not empty
        if(input.username !==""&& input.password!==""){
         
            //there could be missing data for login
            auth.loginAction(data);
            return;
        }
        alert("please provide valid input")
    }

    handlesubmitevent(username,password);


}//end of login method
    
    

    return(<div>
    <HomeButton/>
        
    <div  className=" align-items-center gap-3 d-flex flex-column">
        <h1> Time to log in!</h1>
        <p>//correct. username: adminAccount , password: adminPW</p>
        <div>
            <label>Username:</label>
            <input type="text"
             value={username}
            onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
          <label>Password:</label>
            <input type="text"
             value={password}
            onChange={(e) => setPassword(e.target.value)}/></div>
        <div>
            <button className="btn btn-danger"   onClick={() => {
                            setUsername("");
                            setPassword("");
                        }}>RESET</button>
            <button className="btn btn-success"  onClick={logDataIn}>SUBMIT</button>
        </div>
        <div className=" d-flex align-items-center flex-column" >
            <h3>Don't have an account? Sign up below!</h3>
            <button className="btn btn-primary ">SIGN UP</button>

        </div>
        <div className=" d-flex align-items-center flex-column">
<h3>For administrators ONLY, log in below.</h3>
            <button className="btn btn-dark " onClick={() => navigate("/adminLogin")}>ADMIN LOGIN</button>

        </div>
            
            <LogOutButton/>
    </div>


    </div>);
}
export default LoginSignup;