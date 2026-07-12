import { useEffect } from "react";
import { useAuth } from "./newAuthContext";
import { useNavigate } from "react-router-dom";
function LogOutButton(){
    const auth=useAuth();
const navigate = useNavigate(); 

    function logout(){
        auth.logout();
      //  navigate("/");

    }
    return(<>
    
    <button onClick={logout}>LOGOUT</button>
    
    </>);

}export default LogOutButton;