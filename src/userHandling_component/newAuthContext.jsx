//below is to make authentication context, from lecture slides
//new imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext,createContext, Children } from "react";
const AuthContext=createContext();//make the area that this authentication is used



const AuthProvider=({children})=>{
  

    //below is all new code in next slide
    const[user,setuser]=useState(null);
    const [token,settoken]=useState(localStorage.getItem("site") || "");
    const navigate=useNavigate();

    //when login 
    const loginAction= async (data) => {
        try{
            //below fetch method use the login path 
            const response=await fetch("http://localhost:3001/login", 
                {
                method: "POST",
                headers:{"Content-Type": "application/json",}, 
                body:JSON.stringify(data), 
                credentials: "include" 
                }
        ); //end of fetch method
             //console.log(data);


            //on success, set use state to it
            const res=await response.json();
            console.log(res); //correct. username: adminAccount , password: adminPW
            if(res.data){
                setuser(res.data.user);
                settoken(res.token);
                localStorage.setItem("site",res.token);
                console.log(`LOGIN SUCCESSFUL`);
                navigate("/"); //after login, go to the normal page
                return;
            }
            throw new Error(res.message)

        } 
        catch(error){  console.error(error);} //if it fails      

    };//end of login action async method


    //when logout
    const logout=()=>{
        setuser(null);
        settoken("");
        localStorage.removeItem("site");
        navigate("/loginsignup"); //return to login page
        console.log(`log out done`);
    };//end of logout method

    //this is the return component value of the react component
    return( 
     <AuthContext.Provider value={ {token,user, loginAction,logout} }> {children} </AuthContext.Provider>
    
    );






}; //end of component

export default AuthProvider;
export const useAuth=()=>{
    return useContext(AuthContext);
};