import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useApp } from "../userHandling_component/globalVar";

//THIS COMPONENT IS ONLY FOR THE SEARCH RESULT
function ItemDisplayed(props) {

  const headers = { Accept: "application/json" };

  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
let [index, setindex]=useState();
  const navigate = useNavigate();

  let { setItemID, itemID } = useApp();

  useEffect(() => {

    // Load Product Details
    axios
      .get("http://localhost:3001/api/inft3050/Product?limit=500", {
        headers: headers,
      })
      .then((response) => {

        const foundProduct = response.data.list.find( (item) => item.ID === props.id );

        if (foundProduct) {
          setProduct(foundProduct.Name);
          setDescription(foundProduct.Description);

          
          setindex(response.data.list.indexOf(foundProduct)); //set the array index. actually works

        } else {
          setProduct("Product Not Found");
        }
      })
      .catch((error) => {
        console.log(error);

        setProduct("DATA LOADING FAILED");
        setDescription(
          "Please check that Docker is running and the backend server is started."
        );
      });

    // Load Price





  }, [props.id]); //end of use effect
    
 axios.get("http://localhost:3001/api/inft3050/Stocktake?limit=500", {headers: headers}) 
      .then( (response) => {
        // console.log(response.data.list[productID].Price); 
        setPrice(JSON.stringify(response.data.list[index].Price, null, 2));}  )
      .catch(  (error) => { 
        //console.log(error);
     } );

function updateG(){
   setItemID(i => itemID=index); //now in sync

}

function movepage(){
     navigate("/itempage");

}

 function changePage() {
  updateG();
   //console.log(productID); //this  var is updating
   //console.log(itemID);// global var also update
   movepage();
}

  return (
    <div
className="card container shadow-sm lead border-dark border-2 mb-3 mb-4 bg-info" 
      onClick={changePage}
    >
      <h3 className=" text-dark  fw-bold   ">{product}</h3>
            <p className="fs-6 fw-semibold lh-1">{description}</p>
            <h4>${price}</h4>

    </div>
  );
  

}

export default ItemDisplayed;