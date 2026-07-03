import Table from "./table";
import Options from "./options";
import { useState } from "react";

//this is the page. the page holds many components. the css hooks to this page for the general page design
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Link } from 'react-router-dom';

//this page is for the both things viewing n management
function Page(){
    //a var to see the mode, between customer n asset
    const [mode,setMode]=useState("customer");

    return(
        <>
        <Link to="/">LOGOUT</Link>
            <Options/>
            <Table/>
        </>
    );
}
export default Page;