import { useState } from "react";
import { Link } from 'react-router-dom';
function HomeButton(){
    //THE HOME BUTTON
    return(
        <>
        <Link to="/"> <h1>HOME</h1> </Link>
        
        </>
    );
}

export default HomeButton