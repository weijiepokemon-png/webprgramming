import { useState } from "react";
import LoginButton from "../admin_components/login";
import HomeButton from "../visitor_components/homeButton";
import SearchBar from "../visitor_components/searchBar";
import CartButton from "../visitor_components/cartButton";
import ItemDisplayed from "../visitor_components/itemDisplayed";
import AboutButton from "../visitor_components/aboutButton";
import Contactbutton from "../visitor_components/contactbutton";
import { Link } from "react-router-dom";
import Olditemdisplayed from "../visitor_components/olditemdisplayed";
function NormalPage() {

  const [user, setUser] = useState("visitor");

  // Default products shown when page loads
  const defaultProducts = [
   
  ];

  const [products, setProducts] = useState(defaultProducts);

  const resetProducts = () => {
    setProducts(defaultProducts);
  };

  return (
    <div className="bg-light text-black min-vh-100">

      <div className="d-flex align-items-center gap-3">

        <button
          className="btn btn-primary"
          onClick={resetProducts}
        >
          Home
        </button>

        <SearchBar setProducts={setProducts} />

        <LoginButton
          state={user}
          updaterMethod={setUser}
        />

        <Link to="/editProfile">
          Edit Profile
        </Link>

        <Link to="/viewCustomerProfile">
          View Profile
        </Link>

        <CartButton />

        <AboutButton />

        <Contactbutton />

      </div>

      <h1 className="bg-primary text-center p-3">
        WELCOME TO ENTERTAINMENT GUILD WEBSTORE
      </h1>
<h2>search result</h2>
      {products.length === 0 ? (
        <h2 className="text-dark text-center mt-5">
search something!
        </h2>
      ) : (
        
        products.map((id) => (
<ItemDisplayed key={id} id={id}/> ))
        

      )}
<br/>
<h1>suggested</h1>
<Olditemdisplayed  id={0}/>
<Olditemdisplayed  id={100}/>
<Olditemdisplayed  id={250}/>
<Olditemdisplayed  id={290}/>

    

    </div>
  );
}

export default NormalPage;