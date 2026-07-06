import logo from './logo.svg'; //how to import graphics
import './App.css'; //how to import css
import { useContext, useState } from 'react';

import NormalPage from './userHandling_component/normalpage';//the master pages that handle when page changes

import LoginSignup from './userHandling_component/login-signup';

import Page from './admin_components/admin_page'; //admin page that views tables of assets

import EditUserDetails from './customer_components/editDetails';
import ViewOrderHistory from './userHandling_component/vieworderhistory';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Checkout from './userHandling_component/checkout';

import 'bootstrap/dist/css/bootstrap.min.css';   // IMPORT CSS FROM BOOTSTRAP. for the elements, give it className attribute value


import AboutPage from './visitor_components/aboutPage';
import Contactpage from './visitor_components/contactpage';
import ItemPage from './visitor_components/itemPage';

import { useApp } from './userHandling_component/globalVar';
import AdminLogin from './admin_components/adminLogin';
import EditAsset from './admin_components/editAsset';
import EditProfile from './customer_components/editDetails';
import CustomerProfile from './customer_components/customerproile';
import OrderHistory from './customer_components/oderhistorypage';
import Usertable from './admin_components/admin_userview';

//the router directories
const router=createBrowserRouter([
  {path: "/", element: <NormalPage />},    //default view
  {path: "/loginsignup", element: <LoginSignup/>},
  {path: "/checkout", element: <Checkout/>},
  {path: "/about", element:<AboutPage/> },
  {path:"/contact", element: <Contactpage/>},
  {path:"/itempage", element:<ItemPage />}, //this page is getting prop from global var
  {path:"/adminLogin", element:<AdminLogin/>},
  {path:"/adminPage", element:<Page/>}, //the admin dashboard
  {path:"/editAsset", element:<EditAsset/>}, //edit item page for admin
  {path:"/editProfile", element:<EditProfile/>},
  {path:"/viewCustomerProfile", element:<CustomerProfile/>},
  {path:"/orderHistory", element:<OrderHistory/>},
  {path:"/usertable", element:<Usertable/>}
]);



//the main thing. the method that returns a html element. only 1 parent that holds everything inside
function App() {

  // return based on the router
  return <RouterProvider router={router} />;
}

export default App; //keep this line
