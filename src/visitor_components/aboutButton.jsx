// i am just the button to take user to about page
import { Link } from 'react-router-dom';
import { useState } from "react";


function AboutButton(){
    return(<>
   
          <Link to="/about" >
       <h4>about us</h4>
      </Link>
       </>

    );
}export default AboutButton