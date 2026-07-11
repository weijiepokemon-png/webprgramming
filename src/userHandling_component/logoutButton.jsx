import { useEffect } from "react";
import { useAuth } from "./newAuthContext";

function LogOutButton(){
    const auth=useAuth();

    function logout(){
        auth.logout();
    }
    return(<>
    
    <button onClick={logout}>LOGOUT</button>
    
    </>);

}export default LogOutButton;