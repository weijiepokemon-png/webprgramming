import { useState } from 'react';
import LoginButton from '../admin_components/login'
import HomeButton from '../visitor_components/homeButton';
import SearchBar from '../visitor_components/searchBar';
import CartButton from '../visitor_components/cartButton';

function NormalPage(props){
    //this is the container for the normal page

      const [user, setUser]= useState("visitor");


    return(<>

    <HomeButton/>
    <SearchBar/>
    <LoginButton state={user} updaterMethod={setUser}/>
    <CartButton/>

    <h1> i am the normal page that shows the webstore</h1>
    
    
    </>);


}
export default NormalPage;