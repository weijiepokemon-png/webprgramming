import { useEffect, useState } from "react";
import { useApp } from "../userHandling_component/globalVar"; //import method to collect global var
import axios from "axios";




//this is the text of the item when it is selected n viewed itself
function ItemDescription(props){
  let id= props.id;

    let [product,setProduct]=useState();
    let [description, setDescription]=useState();
let [author, setauthor]=useState();
let [listID, setListID]=useState(); //the id in the list is not aligned with array index
let[price, setPrice]=useState();


    //get the details by axios again
    const headers = {'Accept': 'application/json'}; 
axios.get("http://localhost:3001/api/inft3050/Product?limit=410", {headers: headers}) //break the limit with the limit part
        .then((response) => {
            setProduct(JSON.stringify(response.data.list[id].Name, null, 2));  //direct the result to the data
            setDescription(JSON.stringify(response.data.list[id].Description, null, 2));  
            setauthor(JSON.stringify(response.data.list[id].Author, null, 2))
            setListID(JSON.stringify(response.data.list[id].ID, null, 2))

        }).catch((error) => { 
           // console.log(error);
            /*
            setDescription(`DATA LOADING ...`);  
            setauthor(`DATA LOADING ...`);
            setListID(`DATA LOADING ...`);
            setProduct(`DATA LOADING ...`);
            */

        });

      
        //get the price from stocktake
 axios.get("http://localhost:3001/api/inft3050/Stocktake?limit=500", {headers: headers}) 
      .then( (response) => {
        // console.log(response.data.list[productID].Price); 
        setPrice(JSON.stringify(response.data.list[id].Price, null, 2));}  )
      .catch(  (error) => { 
     //   console.log(error);
     } );

 useEffect( () =>{
 setDescription(`DATA LOADING ...`);  
            setauthor(`DATA LOADING ...`);
            setListID(`DATA LOADING ...`);
            setProduct(`DATA LOADING ...`);
            setPrice(`data loading...`);
},[]);



    //show text of the item, use props to get item
    return(


        <div className="card container shadow-sm lead border-dark border-2 mb-3 mb-4 ">
           
            <h4>Index: {id}</h4>
            <h4>ID: {listID}</h4>
            <h2>NAME: {product}</h2>
            <h5>AUTHOR: {author}</h5>
            <h5>DESCRIPTION: {description}</h5>
            <h5>PRICE: ${price}</h5>

        </div>
    );
}
export default ItemDescription