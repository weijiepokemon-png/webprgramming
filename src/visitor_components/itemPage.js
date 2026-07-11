//when user click on itemdisplayed, opens this page
// then this page holds the item image, item description, shipping charges n add to cart button
import LoginButton from '../admin_components/login';
import HomeButton from '../visitor_components/homeButton';
import ItemDescription from "./itemDescription";
 import ItemImage from "./itemImage";
 
import SearchBar from '../visitor_components/searchBar';
import CartButton from '../visitor_components/cartButton';
import { useEffect, useState } from "react";

//import { useState } from "react";
import { useApp } from "../userHandling_component/globalVar"; //import method to collect global var
import AddToCart from "./addToCartButton";


function ItemPage(props){
    //use prop to handle item by the id
let [user, setUser]= useState("visitor"); 

let[pageid, setpageid]=useState();

//let {itemname,ItemDescription} = useApp();//id of the item on this page
let {itemID}= useApp();

//let thisid=itemID;

useEffect( ()=>{
   // thisid=itemID;
   setpageid(i => pageid= itemID); //now can get from global var
},[] )

return(
    <>
<div className="d-flex align-items-center gap-3">
      <HomeButton />
      <SearchBar />
      <LoginButton state={user} updaterMethod={setUser} />
      <CartButton />
    
    </div>

<ItemDescription id={pageid}/>

<AddToCart />
</>);
}export default ItemPage