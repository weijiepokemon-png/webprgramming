import HomeButton from "../visitor_components/homeButton";
import { useNavigate } from "react-router-dom";

//this is the page for admins to log in

function AdminLogin(){
      const navigate = useNavigate(); 

    return(<>
            <HomeButton/>

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