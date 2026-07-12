// this is the global var. its variables shared by all components in the app
import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
//import { AppContext } from "./AppContext";


//create context
export const AppContext = createContext(null);



//create the component
export function AppProvider({ children }) {
    //the variables
  const [user, setUser] = useState(null);
let [itemID, setItemID]=useState(null); //using this for both item page n editing
let [itemname,setname]= useState(null);
let [ItemDescription,gsetDescription]=useState(null);
let[  ItemAuthor,setItemAuthor]=useState(null);
let[id,setID]=useState(null);

let[userIndex, setUserIndex]=useState(null);
let[userID, setUserID]=useState(null);

//return component, the children is the app component
//currently only using itemid n its setter for item page n editing item
  return (
    <AppContext.Provider
      value={{
        user,setUser,
        itemID,setItemID, //actually the array index, not the item id
        itemname,setname,
        ItemDescription,gsetDescription,
        ItemAuthor,setItemAuthor,
        id,setID,
        userIndex,setUserIndex,
        userID,setUserID,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}



//custom method to get the context data
//other component import the below method, then make their var to reference it
export function useApp() {
    return useContext(AppContext);
}