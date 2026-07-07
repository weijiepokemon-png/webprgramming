import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../userHandling_component/globalVar";
import { useApp } from "../userHandling_component/globalVar";
import ItemDescription from "../visitor_components/itemDescription";


import BackButton from "../userHandling_component/backButton";

function EditAsset(){
    //connect to all the global var
let {itemID} = useApp(); //the array index actually
let {setItemID}=useApp();
let {itemname}=useApp();
let{setname}=useApp();
let {ItemDescription}=useApp();
let{gsetDescription}=useApp();
let{ItemAuthor}=useApp();
let{setItemAuthor}=useApp();
let{id}=useApp();//the actual id
let{setID}=useApp();

//for the page itself to hold
 let [product,setProduct]=useState();
    let [description, setDescription]=useState();
let [author, setauthor]=useState();
let [listID, setListID]=useState();
let[price, setPrice]=useState();

    

    const headers = {'Accept': 'application/json'}; 
    axios.get("http://localhost:3001/api/inft3050/Product?limit=410", {headers: headers}) 
            .then((response) => {
            setProduct(JSON.stringify(response.data.list[itemID].Name, null, 2));  
            setDescription(JSON.stringify(response.data.list[itemID].Description, null, 2));  
            setauthor(JSON.stringify(response.data.list[itemID].Author, null, 2))
            setListID(JSON.stringify(response.data.list[itemID].ID, null, 2))

        }).catch((error) => { console.log(error);}
    );

          //get the price from stocktake
 axios.get("http://localhost:3001/api/inft3050/Stocktake?limit=500", {headers: headers}) 
      .then( (response) => {
        // console.log(response.data.list[productID].Price); 
        setPrice(JSON.stringify(response.data.list[itemID].Price, null, 2));}  )
      .catch(  (error) => { 
     //   console.log(error);
     } );
    

function changeName(){
    let input= prompt("ENTER NEW DETAIL");
    if(input !==null){
          console.log(`DATA: ${input}`);

          //do post request to set the data for this
          let i = {itemID}.itemID;
          changeNameData(i , input);

    }
}

function changeDescription(){
        let input= prompt("ENTER NEW DETAIL");
        if(input !==null){
          console.log(`DATA: ${input}`);

          //do post request to set the data for this
          let i = {itemID}.itemID;
          changeNameData(i , input);

    }



}

function changeAuthor(){
        let input= prompt("ENTER NEW DETAIL");
        if(input !==null){
          console.log(`DATA: ${input}`);

          //do post request to set the data for this
          let i = {itemID}.itemID;
          changeNameData(i , input);

    }


}

function changePrice(){
        let input= prompt("ENTER NEW DETAIL");
        if(input !==null){
          console.log(`DATA: ${input}`);

          //do post request to set the data for this
          let i = {itemID}.itemID;
          changeNameData(i , input);

    }


}

//when clicking button at bottom of page, kill this asset
function deleteAsset(){
    //call delete request on object, by the index
}

//code from lecture notes. async ,method that handle data in json
//index - the array index
//data - the new data to be sent in
    const changeNameData = async (index, data) => {
        //try to set data
        try {
            //make http request to this object
            //console.log({itemID}.itemID); //debug data type argument
           // console.log(index);
            //console.log(typeof index);
            const response = await fetch(`http://localhost:3001/api/inft3050/Product/${index}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({Name: data})
            });

            const newdata = await response.json(); //get the name attribute
            console.log(`new data: ${newdata}`);
           // setUsers(users.map(user => (user.id === id ? newUser : user))); //update the local state, in the use state
        } 

        //in case of failure
        catch (error) {
            console.error('Error updating:', error);
         }

};//end of updater method for name

return(<>
<BackButton/>
 <table className="table table-bordered">
           <tbody>
           <tr>
           
            <th>INDEX</th>
          <td><h4>{itemID}</h4></td>
            
           </tr>
           <tr>
             <th>ID</th>
             <td><h4>{listID}</h4></td>
           </tr>
           <tr>
             <th>NAME</th>
             <td>    <h4>{product}</h4></td>
                <td><button onClick={changeName}>EDIT</button></td>
           </tr>
           <tr>
                        <th>DESCRIPTION</th>
                <td> <h4>{description}</h4></td>
                                <td><button onClick={changeDescription}>EDIT</button></td>

           </tr>
        <tr>
                        <th>AUTHOR</th>
           <td> <h4>{author}</h4></td>
                           <td><button onClick={changeAuthor}>EDIT</button></td>


        </tr>

        </tbody>
        </table>
        <h2>PRICE: ${price}</h2>
        <button onClick={changePrice}>EDIT</button>
        <br/><br/>
  <button onClick={deleteAsset}>DELETE ITEM</button>
            
        
           

    </>);
}export default EditAsset