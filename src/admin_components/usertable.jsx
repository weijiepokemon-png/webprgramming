import axios from "axios";
import { useEffect, useState } from "react";
import { useApp } from "../userHandling_component/globalVar";

import { useNavigate } from "react-router-dom";

function TableUser(){
    const headers = {'Accept': 'application/json'};
const navigate = useNavigate(); 
    const [data, setData] = useState([]); 
    let {itemID} = useApp();
let {setItemID}=useApp();

let {userID}=useApp();
let {setUserID}=useApp();

let{userIndex}=useApp();
let{setUserIndex}=useApp();

function toEdit(the_index,user_id){
    //above arguments correct
    //console.log(index);
    //console.log(userID2);
      // console.log(`passing index ${index} and ID ${userID} to global variable`);

//update to global variable is wrong
/**
 * let i=index;
let ii=userID2;
setUserIndex(i);//the user index global var is their array index
   setUserID(ii); 
 */


 
  setUserIndex(the_index); //global var not updating
    setUserID(user_id);
  //  console.log(userIndex); //console was wrong
    //console.log(userID);

   //console.log(`global variable's userIndex: ${userIndex}`);
   // console.log(`global variable's userID: ${userID}`); //currently out of sync

//console.log(userID);

navigate("/edituser");

}

let printedData = data.map( (data,index)=> (
            <tr key={index}>
                <td>{index} </td>
                <td>{data.UserID}</td>
                 <td>{data.UserName}</td> 
                  <td>{data.Name}</td> 
                <td>{data.Email}</td> 
            
                 <td>{String(data.IsAdmin)}</td>

                 <td>{data.Salt}</td>
                                  <td>{data.HashPW}</td>

                
                <td><button onClick={() => toEdit(index,data.UserID)}>EDIT</button></td>
               
            </tr>
) );
useEffect(
            ()=> {
        axios.get(
        "/api/inft3050/User?limit=1000",{   headers: headers}) 
        .then ( (response) =>{
        
            setData(response.data.list);
           // console.log(response.data.list);
        }) .catch(  (error) => { console.log(error);}  );;

},[]);



function addUser(){
    
        let inputUserName=prompt(`enter username:`);
    let inputName=prompt(`enter name:`);
    let inputEmail=prompt(`enter email:`);
    

  
    if(inputUserName  !==null && inputName !==null && inputEmail !==null ){
        addNewUser(inputUserName,inputName,inputEmail);
    }
    else{
        alert(`incorrect input`);
    }

}
    async function   addNewUser(username,name,email){
        //this is making bad request
    const response = await fetch(`/api/inft3050/User/`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({
                                     UserName: username, 
                                     Email: email,
                                     Name: name,
                                     
                                     Salt: "salty",
                                    HashPW: "password"}),     
                credentials: "include" 
            });
             const newdata = await response.json(); 
            console.log(response);
           
            //update the table
          window.location.reload();

          /**
           * needed data;
           * 
           * email
           * username
           * name
           * salt
           * hash password
           * 
           * empty product list
           */

}


    return(<>
            <button onClick={addUser}>add</button>

     <table className="table table-bordered">
           <tbody>
           <tr>
           
            <th>INDEX</th>
            <th>userID</th>
           <th>username</th>
            <th>name</th>
        
            <th>email</th> 
             <th>admin?</th>
             <th>salt</th>
             <th>hashPW</th>
            
           </tr>
     


            {printedData}</tbody>
        </table>
    
    </>);
}export default TableUser;