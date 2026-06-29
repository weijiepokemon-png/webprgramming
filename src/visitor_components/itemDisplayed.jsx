import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../userHandling_component/globalVar";
import { useApp } from "../userHandling_component/globalVar";
// this would be the item element that shows the items when searched
//THIS COMPONENT IS WAT IS SHOWN TO USER ON NORMAL PAGE, OF THE ITEM. ALSO WHEN SEARCHED. HORIZONTAL LAYOUT


//u could add the add to cart button on this if u lik

//a div is the component. make it have horizontal layout
//when user click, go to its page
function ItemDisplayed(props){
const headers = {'Accept': 'application/json'};//for axios getter
    let [product,setProduct]=useState(); //so that response can go to component, MUST BE USE STATE
    let [description, setDescription]=useState();
    let productID= props.id; //make component belong to product via id


useEffect( () =>{
  productID=props.id;
},[]


);

    //this is the axios getter. the response object is UNREACHABLE outside this method, so need to direct it to use state var
    axios.get("http://localhost:3001/api/inft3050/Product?limit=410", {headers: headers}) //with increased limit, can show all product in console but now component cannot display them
        .then((response) => { 
           //on successful retreival, do below, which is print the data in specific ways
      //  console.log(JSON.stringify(response.data.list[productID], null, 2)); //print the json, convert the json to string. dont touch the 2 next arguments
       
       //print to test
       // console.log('I AM EVERYTHING:');
        //console.log(JSON.stringify(response.data.list, null, 2)); //print the json, convert the json to string. dont touch the 2 next arguments

        //set data to  var
            productID= props.id;//set index of item from list first     
            setProduct(JSON.stringify(response.data.list[productID].Name, null, 2));  //direct the result to the data
            setDescription(JSON.stringify(response.data.list[productID].Description, null, 2));  

            // response.data -> LIST INDEX ->NAME OF VALUE
         })


        .catch((error) => { console.log(error);
          //in case of failure when loading data
          productID= props.id;//set index of item from list first     
            setProduct(`DATA LOADING FAILED`);  //direct the result to the data
            setDescription(`the load failed. check the docker engine`);  

        });
// if u check console, it can get the data properly.  make sure docker is running

//reference to use app method, reference the setter method
let {setItemID}=useApp();
let{itemID}=useApp();



function updateG(){
   setItemID(i => itemID=productID); //now in sync

}

function movepage(){
     navigate("/itempage");

}

 function changePage() {
  updateG();
   console.log(productID); //this  var is updating
   console.log(itemID);// global var doesnt always update
   movepage();
}

  const navigate = useNavigate(); //reference to use the method
    return(
       
         <div className="card container shadow-sm lead border-dark border-2 mb-3 mb-4 "
         onClick={changePage}>

      <img />

      <h3> name: {product}</h3>



    </div>
       
    );
 
}
export default ItemDisplayed;

