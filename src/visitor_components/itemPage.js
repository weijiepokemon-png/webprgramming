//when user click on itemdisplayed, opens this page
// then this page holds the item image, item description, shipping charges n add to cart button

import ItemDescription
 from "./itemDescription";
 import ItemImage from "./itemImage";
 import LoginButton from '../admin_components/login'
import HomeButton from '../visitor_components/homeButton';
import SearchBar from '../visitor_components/searchBar';
import CartButton from '../visitor_components/cartButton';
import { useEffect, useState } from "react";


function ItemPage(props){
    //use prop to handle item by the id
const [user, setUser]= useState("visitor"); 
return(<>
<div className="d-flex align-items-center gap-3">
      <HomeButton />
      <SearchBar />
      <LoginButton state={user} updaterMethod={setUser} />
      <CartButton />
    
    </div>
<ItemImage id={19}/>
<ItemDescription id={19}/>

<h1>I AM THE ITEM'S PAGE</h1>

</>);
}export default ItemPage