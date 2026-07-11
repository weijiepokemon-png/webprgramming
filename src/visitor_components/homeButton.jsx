import { useState } from "react";
import { Link } from 'react-router-dom';
function HomeButton(){
    //THE HOME BUTTON
    return(
        <>
        <Link to="/"  className="btn btn-primary"> HOME </Link>
        
        </>
    );
}

export default HomeButton