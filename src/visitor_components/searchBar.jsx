import { useState } from "react";
function SearchBar(){
// output a text input and a search button
const [userTypedInput, setInput]=useState();

return(
    
    <div>
    <input type="text"/>
    <button>SEARCH</button>
   </div>
);



}

export default SearchBar