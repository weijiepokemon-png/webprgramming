//i am the about page with all the text
import { Link } from 'react-router-dom';
import { useState } from 'react';

import NormalPage from '../userHandling_component/normalpage';
import LoginSignup from '../userHandling_component/login-signup';

import Page from '../admin_components/admin_page'; 

import EditUserDetails from '../customer_components/editDetails';
import ViewOrderHistory from '../userHandling_component/vieworderhistory';

import Checkout from '../userHandling_component/checkout';

import LoginButton from '../admin_components/login'
import HomeButton from './homeButton';
import SearchBar from './searchBar';
import CartButton from './cartButton';
import Testbackend1 from '../database_components/test';
function AboutPage(){
//just the home button at the top to return
//then wall of text


    return(<div>

 <div className="d-flex align-items-center gap-3">
      <HomeButton />
     
    </div>
    <h1 className='bg-primary'> i am the about page</h1>
<p>dddadas fddogogdsidsjj fjvfbgfnbgnht eogpoegjwrop egrpg  m egerggre rgfgfdgds <br/>dds rgdfgtrt reg erg rg r hdfgegergegioegjtop erongre rije adadsad</p>



    </div>);




}export default AboutPage