import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../userHandling_component/globalVar";
import { useApp } from "../userHandling_component/globalVar";
import ItemDescription from "../visitor_components/itemDescription";


import BackButton from "../userHandling_component/backButton";

//full component
function EditUser(){
      const navigate = useNavigate(); 

    //set data to page
        let[userindex,setindex]=useState();
    let[userid,setuserid]=useState();
    let[name,setname]=useState();
    let[username,setusername]=useState();
    let[email,setemail]=useState();
    let[isAdmin,setAdmin]=useState();

    let {userID}=useApp(); //reference to global variables
    let{setUserID}=useApp();// userID

    let{userIndex}=useApp(); //user index
let{setUserIndex}=useApp();

let[salt,setsalt]=useState();
let[hashpw,sethashpw]=useState();

    const headers = {'Accept': 'application/json'}; 

useEffect(
    ()=>{

setindex(userIndex); //this is undefined when start
            setuserid(userID);
           // console.log(userindex);
            //console.log(userid)

            //console.log(userindex);
            //get data from database
                axios.get( "/api/inft3050/User?limit=1000", {   headers: headers} )
                .then((response)=>{
                    let our_userindex= userIndex;

                    console.log(userindex);
                   console.log(response.data.list[our_userindex]);
                                       console.log(our_userindex);



            
                    
                // setindex(JSON.stringify(response.data.list[userindex], null,2));
                 //setuserid(JSON.stringify(response.data.list[userindex].UserID, null,2));
                    setname(JSON.stringify(response.data.list[our_userindex].Name, null,2));
                    setusername(JSON.stringify(response.data.list[our_userindex].UserName, null,2));
                    setemail(JSON.stringify(response.data.list[our_userindex].Email, null,2));
                   setAdmin(String(JSON.stringify(response.data.list[our_userindex].IsAdmin, null,2)));
                    setsalt(JSON.stringify(response.data.list[our_userindex].Salt, null,2));
                    sethashpw(JSON.stringify(response.data.list[our_userindex].HashPW, null,2));

                   //  setAdmin(JSON.stringify(response.data.list[our_userindex].IsAdmin, null,2));

//setAdmin(response.data.list[our_userindex].IsAdmin);
                    //console.log(userid);
               

                      /**
                 *  setname(JSON.stringify(response.data.list[UserID].Name, null,2));
                    console.log(response.data.list);
                        */

                }).catch((error) => { console.log(error);}
    );

    },[]

);

  


function changeuserID(){
    //this is not an ID that we can use, as good as string
     let input= prompt("ENTER NEW DETAIL");
    if(input !==null){
          console.log(`DATA: ${input}`);

          //do post request to set the data for this
          let i = userID;
                    console.log(i);

          changeIDData(i , input);

    }
}
  const changeIDData = async (index, data) => {
       
        try {
         
            const response = await fetch(`/api/inft3050/User/${index}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({UserID: data}),
                credentials: "include" 
            });
           setuserid(data);//may update, but if it does not go through
           //not working, dont know if its really unchangable
           //i think userid cannot change
        } 

        catch (error) {  console.error('Error updating:', error);}
    }

function changeName(){
    //name is the human name. user name is the name to login
     let input= prompt("ENTER NEW DETAIL");
    if(input !==null){
          console.log(`DATA: ${input}`);

          //do post request to set the data for this
          let i = userID;
                    console.log(i);

          changeNameData(i , input); 

    }
}
  const changeNameData = async (index, data) => {
       
        try {
         
            const response = await fetch(`/api/inft3050/User/${index}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({Name: data}),
                credentials: "include" 
            });
           setname(data); //update on our end
        } 

        catch (error) {  console.error('Error updating:', error);}
    }


function changeUsername(){
    //username in system, not real human name
 let input= prompt("ENTER NEW DETAIL");
    if(input !==null){
          console.log(`DATA: ${input}`);

          let i = userID;
                    console.log(i);

          changeUserNameData(i , input); 

    }
}
  const changeUserNameData = async (index, data) => {
       
        try {
         
            const response = await fetch(`/api/inft3050/User/${index}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({UserName: data}),
                credentials: "include" 
            });
           setusername(data); //update on our end
        } 

        catch (error) {  console.error('Error updating:', error);}

        //DOES NOT ALWAYS WORK, COULD BE DUE TO THE OTHER TABLES
    }


function changeEmail(){
 let input= prompt("ENTER NEW DETAIL");
    if(input !==null){
          console.log(`DATA: ${input}`);

          let i = userID;
                    console.log(i);

          changeEmailData(i , input); 

    }
}
    const changeEmailData = async (index, data) => {
       
        try {
         
            const response = await fetch(`/api/inft3050/User/${index}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({Email: data}),
                credentials: "include" 
            });
           setemail(data); //update on our end
        } 

        catch (error) {  console.error('Error updating:', error);}
    }



function changeadmin(){
                    //use a confirm popup box to set
    const result = window.confirm("Toggle administrator?");

                if (result) {
                    //is a bool
                    let output=false;
                    let i = userID;

                    if(isAdmin==="true"){
                        output=false;
                    }
                    if(isAdmin==="false"){
                        output=true;
                    }

                    console.log(isAdmin);
                    console.log(output);

                toggleadmin(i,output);

                }


}
          const toggleadmin = async (index, data) => {
       
        try {
         //now getting bad request error
            const response = await fetch(`/api/inft3050/User/${index}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({IsAdmin: String(data)}),
                credentials: "include" 
            });
           setAdmin(String(data)); //update on our end
        } 

        catch (error) {  console.error('Error updating:', error);}
    }





    //when admin click on delete user
    function deleteUser(){
        let deadInput="----------------------------"
                            let i = userID;

             changeUserNameData(i , deadInput); //doesnt always work but can try edit itself
          changeNameData(i , deadInput); 
          changeEmailData(i , deadInput); 
                toggleadmin(i,false);
          changeSaltData(i , deadInput); 
          changeHashData(i , deadInput); 

    }




function changeSalt(){
 let input= prompt("ENTER NEW DETAIL");
    if(input !==null){
          console.log(`DATA: ${input}`);

          let i = userID;
                    console.log(i);

          changeSaltData(i , input); 

    }
}
    const changeSaltData = async (index, data) => {
       
        try {
         
            const response = await fetch(`/api/inft3050/User/${index}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({Salt: data}),
                credentials: "include" 
            });
           setsalt(data); //update on our end
        } 

        catch (error) {  console.error('Error updating:', error);}
    }


function changeHashPW(){
 let input= prompt("ENTER NEW DETAIL");
    if(input !==null){
          console.log(`DATA: ${input}`);

          let i = userID;
                    console.log(i);

          changeHashData(i , input); 

    }
}
    const changeHashData = async (index, data) => {
       
        try {
         
            const response = await fetch(`/api/inft3050/User/${index}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({HashPW: data}),
                credentials: "include" 
            });
           sethashpw(data); //update on our end
        } 

        catch (error) {  console.error('Error updating:', error);}
    }





    //output to html
    return(<>
        <BackButton/>


<table className="table table-bordered">
           <tbody>
           <tr>
           
            <th>INDEX</th>
          <td><h4>{userindex}</h4></td>
            
           </tr>

           <tr>
             <th>userID</th>
             <td><h4>{userid}</h4></td>
             {/** <td><button onClick={changeuserID}>EDIT</button></td> */}        
           </tr> 

              <tr>
             <th>USERNAME</th>
                <td> <h4>{username}</h4></td>
                                <td><button onClick={changeUsername}>EDIT</button></td>
           </tr>

           <tr>
             <th>NAME</th>
             <td>    <h4>{name}</h4></td>
                <td><button onClick={changeName}>EDIT</button></td>
           </tr>
       
        <tr>
                        <th>EMAIL</th>
           <td> <h4>{email}</h4></td>
                           <td><button onClick={changeEmail}>EDIT</button></td>
        </tr>

          <tr>
                        <th>is admin?</th>
           <td> <h4>{isAdmin}</h4></td>
                           <td><button onClick={changeadmin}>EDIT</button></td>
        </tr>

  
          <tr>
                        <th>salt</th>
           <td> <h4>{salt}</h4></td>
                           <td><button onClick={changeSalt}>EDIT</button></td>
        </tr>

          
          <tr>
                        <th>hashed password</th>
           <td> <h4>{hashpw}</h4></td>
                           <td><button onClick={changeHashPW}>EDIT</button></td>
        </tr>

        </tbody>
        </table>
        <button onClick={deleteUser}>DELETE USER</button>

    </>);

















}//end of component
export default EditUser;