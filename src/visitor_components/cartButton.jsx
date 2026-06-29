import { useState } from "react";
import { Link } from 'react-router-dom';


function CartButton(){
    //the button that goes to user cart page, can show amount of items if u can
    return(
        <>
        <Link to="/checkout"> <h4>SHOPPING CART </h4></Link>
        </>
    );
}

export default CartButton

