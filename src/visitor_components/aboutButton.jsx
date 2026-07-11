// i am just the button to take user to about page
import { Link } from 'react-router-dom';
import { useState } from "react";


function AboutButton(){
    return(<>
   
          <Link to="/about"  className="btn btn-primary" >
       ABOUT US
      </Link>
       </>

    );
}export default AboutButton