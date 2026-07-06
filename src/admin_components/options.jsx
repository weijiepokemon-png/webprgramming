//the top part the buttons
import { useNavigate } from "react-router-dom";

function Options(){
 const navigate = useNavigate(); 
    let seeUser= ()=>{
        navigate("/usertable");
    }

    //logout, change view, add thing, edit thing
    return(
        <>
        <div>
        <button onClick={seeUser}>change view</button>
        <button>add</button>
</div>
        </>
    );
}
export default Options;