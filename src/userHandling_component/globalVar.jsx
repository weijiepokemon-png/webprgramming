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
let [itemID, setItemID]=useState(null);
let [itemname,setname]= useState(null);
let [ItemDescription,gsetDescription]=useState(null);

//return component, the children is the app component
  return (
    <AppContext.Provider
      value={{
        user,setUser,
        itemID,setItemID,
        itemname,setname,
        ItemDescription,gsetDescription,
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