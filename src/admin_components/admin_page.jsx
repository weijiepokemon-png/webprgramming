import Table from "./table";
import Options from "./options";
import { useState } from "react";

//this is the page. the page holds many components. the css hooks to this page for the general page design

//this page is for the both things viewing n management
function Page(){
    //a var to see the mode, between customer n asset
    const [mode,setMode]=useState("customer");

    return(
        <>
            <Options/>
            <Table/>
        </>
    );
}
export default Page;