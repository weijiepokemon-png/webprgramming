import { useState } from "react";
import { useApp } from "../userHandling_component/globalVar"; //import method to collect global var
import axios from "axios";


//this is the text of the item when it is selected n viewed itself

function ItemDescription(props){
    let id = props.id;
 let [product,setProduct]=useState();
    let [description, setDescription]=useState();
let [author, setauthor]=useState();
    //get the details by axios again
    const headers = {'Accept': 'application/json'}; 
axios.get("http://localhost:3001/api/inft3050/Product", {headers: headers})
        .then((response) => {
  setProduct(JSON.stringify(response.data.list[id].Name, null, 2));  //direct the result to the data
            setDescription(JSON.stringify(response.data.list[id].Description, null, 2));  
            setauthor(JSON.stringify(response.data.list[id].Author, null, 2))

        }).catch((error) => { console.log(error);
        });


    //show text of the item, use props to get item
    return(


        <div>
            <p>pretend im the item descriptions showing item {id}</p>
            <h2>ID: {id}</h2>
<h2>NAME: {product}</h2>
            <h3>DESCRIPTION: {description}</h3>
            <h4>AUTHOR: {author}</h4>

        </div>
    );
}
export default ItemDescription