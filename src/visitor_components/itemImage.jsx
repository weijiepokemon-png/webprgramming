//when the user click that item, this will show for that item's page
import { useState } from "react";
import axios from "axios";

//there is no images in the database, this component will not be used

function ItemImage(props){

    //the image of the item. this component will be reused for diff items
    //use props to get the image

    let id = props.id;
   


return(

 <div>
    <p>pretend im the image, showing item {id}</p>
    <h2>THERE ARE NO IMAGES IN THE DATABASE</h2>
 </div>
);}
export default ItemImage;
