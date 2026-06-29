//this is the login n signup page
import HomeButton from "../visitor_components/homeButton";
import { useNavigate } from "react-router-dom";

function LoginSignup(){
    //at the top is the home button
    // in the center is the login inputs

    //CURRENTLY BUTTONS N INPUTS CANNOT DO ANYTHING

  const navigate = useNavigate(); 

    return(<div>
    <HomeButton/>

        
    
        
    <div  className=" align-items-center gap-3 d-flex flex-column">
        <h1> Time to log in!</h1>
        <div>
            <label>Username:</label>
            <input type="text"/>
        </div>
        <div>
          <label>Password:</label>
            <input type="text"/></div>
        <div>
            <button className="btn btn-danger">RESET</button>
            <button className="btn btn-success">SUBMIT</button>
        </div>
        <div className=" d-flex align-items-center flex-column" >
            <h3>Don't have an account? Sign up below!</h3>
            <button className="btn btn-primary ">SIGN UP</button>

        </div>
        <div className=" d-flex align-items-center flex-column">
<h3>For administrators ONLY, log in below.</h3>
            <button className="btn btn-dark " onClick={() => navigate("/adminLogin")}>ADMIN LOGIN</button>

        </div>
            
    </div>


    </div>);
}
export default LoginSignup;