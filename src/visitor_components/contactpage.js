import HomeButton from './homeButton';

function Contactpage(){
    //just the home button to return
    // then a form input
return(<div>

 <div className="d-flex align-items-center gap-3">
      <HomeButton />
     
    </div>
    <h1 className='bg-primary'> i am the contact page</h1>
    
<div>
    <label>name:</label>
    <input type='text'/>
</div>
<div>
    <label>email:</label>
        <input type='text'/>

</div>

<div>
    <label>enquiry:</label>
<textarea rows="5" cols="50" />
</div>

<div>
            <button className="btn btn-danger">RESET</button>
            <button className="btn btn-success">SUBMIT</button>
        </div>
    </div>);
}export default Contactpage