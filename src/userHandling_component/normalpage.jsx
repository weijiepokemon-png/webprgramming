import { useState } from 'react';
import LoginButton from '../admin_components/login'
import HomeButton from '../visitor_components/homeButton';
import SearchBar from '../visitor_components/searchBar';
import CartButton from '../visitor_components/cartButton';
import Testbackend1 from '../database_components/test';

import ItemDisplayed from '../visitor_components/itemDisplayed';
import AboutButton from '../visitor_components/aboutButton';
import Contactbutton from '../visitor_components/contactbutton';
import { Link } from 'react-router-dom';

//THE HOME PAGE. IT SHOWS SOME ITEMS ON DISPLAYED WITH BUTTONS ON TOP. this is the container for the normal page

function NormalPage(props){

      const [user, setUser]= useState("visitor"); //to determine if user is visitor, customer or admin


    return(<div className='bg-light text-white min-vh-100 ' >

    <div className="d-flex align-items-center gap-3">
      <HomeButton />
      <SearchBar />
      <LoginButton state={user} updaterMethod={setUser} />
      <Link to="/editProfile">edit profile</Link>
            <Link to="/viewCustomerProfile">view profile</Link>

      <CartButton />
      <AboutButton/>
      <Contactbutton/>
    </div>

    <h1 className='bg-primary'> WELCOME TO ENTERTAINMENT GUILD WEBSTORE</h1>


<ItemDisplayed id={0}/>
<ItemDisplayed id={23}/>
    <ItemDisplayed id={25}/>
<ItemDisplayed id={29}/>
<ItemDisplayed id={90}/>
<ItemDisplayed id={1}/>
<ItemDisplayed id={22}/>
<ItemDisplayed id={23}/>
<ItemDisplayed id={8}/>
<ItemDisplayed id={280}/>


   </div>
    );


}
export default NormalPage;
