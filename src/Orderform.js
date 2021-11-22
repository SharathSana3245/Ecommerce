import React from "react";
import "./Orderform.css";
import { Link } from "react-router-dom";

function Orderform(props) {
    const[abc,setabc]=React.useState(false);
    const[closeform,setcloseform]=React.useState(true)
  const [orderdetails, setorderdetails] = React.useState({
    fullname: "",
    street: "",
    city: "",
    contactno: "",
  });
  const Orderhandler=(e)=>{
     
      
      const{name,value}=e.target;
      setorderdetails({...orderdetails,[name]:value})
      
      console.log(orderdetails.fullname);

  }
  const sentdata=()=>{
    setcloseform(false)
    setabc(true)
    
      props.come(orderdetails,abc)
      
  }
  
  return (
    <div>{closeform&&
      <form  className="order_form">
        <p>Name:</p>
        <input type="text" name="fullname"  value={orderdetails.fullname} onChange={Orderhandler}/>
        <p>Street No. :</p>
        <input type="text" name="street" value={orderdetails.street} onChange={Orderhandler}/>
        <p>City:</p>
        <input type="text" name="city" value={orderdetails.city} onChange={Orderhandler}/>
        <p>Contact No. :</p>
        <input type="number" name="contactno" value={orderdetails.contactno} onChange={Orderhandler} />
        <Link to="/Payment">
          {" "}
          <button className="submit" type="submit" onClick={sentdata}>Submit</button>
        </Link>
      </form>}
    </div>
  );
}

export default Orderform;
