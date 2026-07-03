import { useNavigate } from "react-router-dom";

function BackButton(){
  const navigate = useNavigate(); 
function back(){
    navigate(-1);

}

    return(<>
    <button onClick={back}>Back</button>
    
    </>);
}export default BackButton;