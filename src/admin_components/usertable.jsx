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

function toEdit(i){
  
    setItemID(i);
navigate("/editAsset");

}

let printedData = data.map( (data,index)=> (
            <tr key={index}>
                <td>{index} </td>
                <td>{data.UserID}</td>
                <td>{data.Email}</td> 
                <td>{data.Name}</td> 
                
                <td><button onClick={() => toEdit(index)}>EDIT</button></td>
               
            </tr>
) );
useEffect(
            ()=> {
        axios.get(
        "/api/inft3050/User?limit=1000",{   headers: headers}) 
        .then ( (response) =>{
        
            setData(response.data.list);
            console.log(response.data.list);
        }) .catch(  (error) => { console.log(error);}  );;

},[]);


    return(<>
    
     <table className="table table-bordered">
           <tbody>
           <tr>
           
            <th>INDEX</th>
            <th>userID</th>
            <th>email</th>
            <th>username</th>
            
           </tr>
     


            {printedData}</tbody>
        </table>
    
    </>);
}export default TableUser;