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
//import AuthProvider from './userHandling_component/newAuthContext'; //authentication provider wraps the whole all including global variables provider
import AuthProvider from "./newAuthContext";

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
    <div className="bg-secondary-subtle text-black min-vh-100">

{/**nav bar */}
      <div className="d-flex align-items-center gap-1">

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

              <Link to="/editProfile"  className="btn btn-primary">
                Edit Profile
              </Link>

              <Link to="/viewCustomerProfile "  className="btn btn-primary">
                View Profile
              </Link>

              <CartButton />

              <AboutButton />

              <Contactbutton />

      </div>

<br/>
      <h1 className="display-2 fw-bold  text-center mb-4 bg-primary text-light border border-warning border-5"  >
        WELCOME TO ENTERTAINMENT GUILD WEBSTORE
      </h1>
<h1 className=" text-dark fst-italic text-center bg-warning " >Search result</h1>
      {products.length === 0 ? (
        <h2 className="text-dark  text-center mt-5 mx-5 border border-dark border-2 rounded-pill bg-info">
Search something!
        </h2>
      ) : (
        
        products.map((id) => (
<ItemDisplayed key={id} id={id}/> ))
        

      )}
<br/>
<h1 className=" text-dark text-center bg-warning fst-italic" >Suggested</h1>
<Olditemdisplayed  id={0}/>
<Olditemdisplayed  id={100}/>
<Olditemdisplayed  id={250}/>
<Olditemdisplayed  id={290}/>

    

    </div>
       
  );
}

export default NormalPage;