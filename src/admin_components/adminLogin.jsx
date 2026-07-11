import HomeButton from "../visitor_components/homeButton";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../userHandling_component/newAuthContext";
import LogOutButton from "../userHandling_component/logoutButton";
//this is the page for admins to log in
import BackButton from "../userHandling_component/backButton";
import { useState } from "react";

function AdminLogin(){
      const navigate = useNavigate(); 

    const [input,setinput]=useState({username:"",password:"",});
let [username,setUsername]=useState();
let [password,setPassword]=useState();
const adminLogDataIn=()=>{

   const data={
        username,password
    };
    console.log(data);
}

    return(<>
            <HomeButton/>
            <BackButton/>

     <div  className=" align-items-center gap-3 d-flex flex-column">
        <h1> ADMIN LOGIN</h1>
        <div>
            <label>Username:</label>
            <input type="text"/>
        </div>
        <div>
          <label>Password:</label>
            <input type="text"/></div>
        <div/>
            <button className="btn btn-danger">RESET</button>
            <button className="btn btn-success" onClick={() => navigate("/adminPage")}>SUBMIT</button>
    </div>
   
   </> );
}export default AdminLogin;