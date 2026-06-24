//this is the login n signup page
import HomeButton from "../visitor_components/homeButton";
function LoginSignup(){
    //at the top is the home button
    // in the center is the login inputs

    //CURRENTLY BUTTONS N INPUTS CANNOT DO ANYTHING


    return(<div>
    <HomeButton/>

        
    
        
    <div  className=" align-items-center gap-3 d-flex flex-column">
        <h1> i am the login sign up page</h1>
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
            <h3>don't have an account? sign up below.</h3>
            <button className="btn btn-primary ">SIGN UP</button>

        </div>
        <div className=" d-flex align-items-center flex-column">
<h3>for admins, log in below</h3>
            <button className="btn btn-dark ">admin login</button>

        </div>
            
    </div>


    </div>);
}
export default LoginSignup;