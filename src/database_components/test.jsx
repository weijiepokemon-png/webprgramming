import axios from "axios";
import { useEffect, useState } from "react";

//where props is the index of the object in the list
function Testbackend1(props){
    const headers = {'Accept': 'application/json'};//for axios getter

const [product, setProduct]= useState();//set the global var of the data
const [i, setIndex]=useState();

//this is the axios getter. the response object is UNREACHABLE outside this method, so need to direct it to use state var
    axios.get("http://localhost:3001/api/inft3050/Product", {headers: headers})
        .then((response) => { 
           //on successful retreival, do below, which is print the data in specific ways
        console.log(JSON.stringify(response.data.list, null, 2)); //print the json, convert the json to string. dont touch the 2 next arguments

        //set data to global var
            setIndex(props.id);//set index of item from list first     
        setProduct(JSON.stringify(response.data.list[i].Description, null, 2)); //direct the result to the data
             // response.data -> LIST INDEX ->NAME OF VALUE
         })


        .catch((error) => { console.log(error);});
// if u check console, it can get the data properly.  make sure docker is running




/*
below the things after the root. use console.log to show wats inside to get the value name

/api/inft3050/BookGenre
/api/inft3050/BookGenre new
/api/inft3050/GameGenre
/api/inft3050/Genre
/api/inft3050/MovieGenre
/api/inft3050/Orders
/api/inft3050/Patrons
/api/inft3050/Product
/api/inft3050/Source
/api/inft3050/Stocktake
/api/inft3050/User
/api/inft3050/TO
 */

//data is global var
    return(<>
       {product}
       <br></br>
       <br></br>
    </>)




}//end of component 

    
export default Testbackend1