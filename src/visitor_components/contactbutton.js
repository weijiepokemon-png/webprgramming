// i am just the button to take user to about page
import { Link } from 'react-router-dom';
import { useState } from "react";


function Contactbutton(){
    return(<>
   
          <Link to="/contact" >
       <h4>CONTACT US</h4>
      </Link>
       </>

    );
}export default Contactbutton