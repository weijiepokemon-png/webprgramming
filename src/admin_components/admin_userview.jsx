import axios from "axios";
import { useEffect, useState } from "react";
import { useApp } from "../userHandling_component/globalVar";
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import TableUser from "./usertable";
import LogOutButton from "../userHandling_component/logoutButton";
function Usertable(){



    return(<>
    <div>
      <LogOutButton/>
            <br/>
            <TableUser/>

<Link to="/adminPage">to item view</Link> 
  </div>  </>);
}export default Usertable;