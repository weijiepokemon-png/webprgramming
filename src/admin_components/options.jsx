//the top part the buttons
import { useNavigate } from "react-router-dom";

function Options(){
 const navigate = useNavigate(); 
    let seeUser= ()=>{
        navigate("/usertable");
    }

    //when button clicked and get input
function addItem(){
    //console.log(`CLICKED BUTTON TO ADD ITEM`);
    let inputName=prompt(`enter name:`);
    let inputDes=prompt(`enter description:`);
    let inputAuth=prompt(`enter author:`);
    let inputPrice=prompt(`enter price:`);

    //do the confirmation before sending
    if(inputName  !==null && inputDes !==null && inputAuth !==null && !isNaN(inputPrice)){
        addToDatabase(inputName,inputDes,inputAuth,inputPrice);
    }
    else{
        alert(`incorrect input`);
    }



}

//send input data to database
async function   addToDatabase(name,des,auth,price){
    const response = await fetch(`/api/inft3050/Product/`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({Name: name, Description: des, Author: auth }),     
                credentials: "include" 
            });
             const newdata = await response.json(); 
            console.log(response);
           
            //update the table
          window.location.reload();

}


    //logout, change view, add thing, edit thing
    return(
        <>
        <div>
        <button onClick={seeUser}>change view</button>
        <button onClick={addItem}>add</button>
</div>
        </>
    );
}
export default Options;