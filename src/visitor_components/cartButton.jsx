import { useState } from "react";
import { Link } from 'react-router-dom';


function CartButton(){
    //the button that goes to user cart page, can show amount of items if u can
    return(
        <>
        <Link to="/checkout"> SHOPPING CART </Link>
        </>
    );
}

export default CartButton

