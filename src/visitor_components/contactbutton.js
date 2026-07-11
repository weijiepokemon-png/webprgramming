// i am just the button to take user to about page
import { Link } from 'react-router-dom';
import { useState } from "react";


function Contactbutton(){
    return(<>
   
          <Link to="/contact"  className="btn btn-primary" >
       CONTACT US
      </Link>
       </>

    );
}export default Contactbutton