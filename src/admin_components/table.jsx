//this is the table that shows the results from customer or asset
import axios from "axios";
import { useEffect, useState } from "react";
import { useApp } from "../userHandling_component/globalVar";

import { useNavigate } from "react-router-dom";

function Table(props){
    let originalData;
    let listItem;
const [data, setData] = useState([]); //reference list item by the index, below code is using this

//unused
//let [itemID, setID] = useState([]); //var to hold each stat as it loops
let [itemName, setName]=useState([]);
let [itemAuthor,setAuthor]=useState([]);
let [itemDescription, setDescription]=useState([]);
let [itemArrayIndex, setIndex]=useState([]); //this should not be used
let {itemID} = useApp();
let {setItemID}=useApp();

let[price, setPrice]=useState();


//map out the data
//for each item, make a table row with each table data being the data
let printedData = data.map( (data,index)=> (
            <tr key={index}>
                <td>{index} </td>
                <td>{data.ID}</td>
                <td>{data.Name}</td> 
                <td>{data.Description}</td> 
                <td>{data.Author}</td>
                
                <td><button onClick={() => toEdit(index)}>EDIT</button></td>
               
            </tr>
            //<td>${getPrice(index)}</td>
) );

//when clicked edit button, open popup or new page to edit data, delete button below it
function toEdit(i){
    //can move to another page, use global var to keep the array index
   //setItemID(i => itemID=productID);
    setItemID(i);
   // console.log(`set the global var to ${i}` );
navigate("/editAsset");

}
function getPrice(i){
      //get the price from stocktake
 axios.get("http://localhost:3001/api/inft3050/Stocktake?limit=500", {headers: headers}) 
      .then( (response) => {
        // console.log(response.data.list[productID].Price); 
        setPrice(JSON.stringify(response.data.list[itemID].Price, null, 2));}  )
      .catch(  (error) => { 
     //   console.log(error);
     } );

     return price;
}



const headers = {'Accept': 'application/json'};
const navigate = useNavigate(); 

//when component mounts, get the data n set it into usestate var
useEffect(
    ()=> {
axios.get(
"http://localhost:3001/api/inft3050/Product?limit=410",{headers: headers}) 
.then ( (response) =>{
  
    setData(response.data.list);
});





},[]);

//in the table, reference that variable
    return(
        <>

        <table className="table table-bordered">
           <tbody>
           <tr>
           
            <th>INDEX</th>
            <th>ID</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>AUTHOR</th>
            
           </tr>
     


            {printedData}</tbody>
        </table>
        
        </>
        //            <th>PRICE</th>

    );
}
export default Table;
