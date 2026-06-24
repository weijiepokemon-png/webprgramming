import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// this would be the item element that shows the items when searched
//THIS COMPONENT IS WAT IS SHOWN TO USER ON NORMAL PAGE, OF THE ITEM. ALSO WHEN SEARCHED. HORIZONTAL LAYOUT


//u could add the add to cart button on this if u lik

//a div is the component. make it have horizontal layout
//when user click, go to its page
function ItemDisplayed(props){
const headers = {'Accept': 'application/json'};//for axios getter
    let [product,setProduct]=useState(); //so that response can go to component, MUST BE USE STATE
    let [description, setDescription]=useState();
    let productID= props.id; //make component belong to product via id

    //this is the axios getter. the response object is UNREACHABLE outside this method, so need to direct it to use state var
    axios.get("http://localhost:3001/api/inft3050/Product", {headers: headers})
        .then((response) => { 
           //on successful retreival, do below, which is print the data in specific ways
       // console.log(JSON.stringify(response.data.list[productID], null, 2)); //print the json, convert the json to string. dont touch the 2 next arguments

        //set data to  var
            productID= props.id;//set index of item from list first     
            setProduct(JSON.stringify(response.data.list[productID].Name, null, 2));  //direct the result to the data
            setDescription(JSON.stringify(response.data.list[productID].Description, null, 2));  

            // response.data -> LIST INDEX ->NAME OF VALUE
         })


        .catch((error) => { console.log(error);
          //in case of failure when loading data
          productID= props.id;//set index of item from list first     
            setProduct(`DATA LOADING FAILED`);  //direct the result to the data
            setDescription(`the load failed. check the docker engine`);  

        });
// if u check console, it can get the data properly.  make sure docker is running


  const navigate = useNavigate();

    //make user click on this then move to the dedicated item page
    //but need to send the item id as prop value
    
    return(
       
         <div className="card container shadow-sm lead border-dark border-2 mb-3 mb-4 "
         onClick={() => navigate("/itempage")}>

      <img
        
      />
      <h3> ID: {productID}</h3>

      <h3> name: {product}</h3>

      <p> description: {description}</p>


    </div>
       
    );
}
export default ItemDisplayed;



/** meet's original-----------------------------------------------
 * 
 * import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button>View Details</button>
      </Link>

    </div>
  );
}

export default ProductCard;
 * 
 * 
 */
