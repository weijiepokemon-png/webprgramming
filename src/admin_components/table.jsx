//this is the table that shows the results from customer or asset
import axios from "axios";
import { useEffect, useState } from "react";

function Table(props){
    let originalData;
    let listItem;
const [data, setData] = useState([]); //reference list item by the index
let [itemID, setID] = useState([]); //var to hold each stat as it loops
let [itemName, setName]=useState([]);
let [itemAuthor,setAuthor]=useState([]);
let [itemDescription, setDescription]=useState([]);
let [itemArrayIndex, setIndex]=useState([]); //this should not be used



//map out the data
let printedData = data.map( (data,index)=> (
            <li key={data.ID}>
                <p>ARRAY INDEX: {index} </p>
                <p>ITEM ID: {data.ID}</p>
                <p>ITEM NAME: {data.Name}</p> 
                <p>ITEM DESCRIPTION: {data.Description}</p> 
                <p>ITEM AUTHOR: {data.Author}</p>
               
            </li>
) );

let printStats = (index, id,name,description,author) =>{
   // printedData += <li>{index} {id} {name} {description} {author}</li> ;
}

const headers = {'Accept': 'application/json'};

//when component mounts, get the data n set it into usestate var
useEffect(
    ()=> {
axios.get(
"http://localhost:3001/api/inft3050/Product?limit=410",{headers: headers}) 
.then ( (response) =>{
  
    setData(response.data.list);



});
    },[]

);

//in the ordered list, reference that variable
    return(
        <>
        <h2>i am the big table list of inventory</h2>

        <ol>
           
            {printedData}
        </ol>
        
        </>
    );
}
export default Table;
