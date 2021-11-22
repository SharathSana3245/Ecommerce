import React,{useContext} from 'react';
import BasketContext from "./Basketcontext";
import './Payment.css';
import {Link} from 'react-router-dom';
import Basketproduct from './Basketproduct';
import Orderform from './Orderform';

function Payment(props) {
    const[ordered,setordered]=React.useState(true);
    const[orderbutton,setorderbutton]=React.useState(true)
    const[openform,setopenform]=React.useState(false);
    const[userdata,setuserdata]=React.useState([]);
    const[displaydetails,setdisplaydetails]=React.useState(true);
   
    // const[closeform,setcloseform]=React.useState(true);
    const onclick=()=>{
        setopenform(true);
       
      

    }
    const comehandler=(deliverydata,abc)=>{
        console.log(deliverydata)
        console.log(abc)
        setdisplaydetails(abc)
        console.log(displaydetails)
     
     const data=Object.values(deliverydata)
     setuserdata(data)
    
    }
    // console.log(userdata[0])
    // const displaybutton=userdata.length>3;    
    // const array=Object.values(userdata)
    // console.log(array)
    const removeproducthandler=(id)=>{
        console.log(id,"id")
        basketctx.removeproduct(id)
  
      }
      
const basketctx = useContext(BasketContext);
const basketctxproduct=basketctx.products;

const d=new Date();
let text=d.toLocaleDateString();
const orderhandler=async()=>{
    await fetch("https://clone-challenge-b4d13-default-rtdb.firebaseio.com/Orders.json" , {
      method: "POST",
      body: JSON.stringify({
        time: text,
        user: userdata,
        orderedproducts:basketctxproduct
       
      }),
    })
    setordered(false);
    setorderbutton(false)
    basketctx.onclear()

}
// const orderapplies=basketctxproduct>=1
    return (
        <div className="payment">
            { ordered ?<div>
            <h1>Checkout <Link to='/checkout'> ({ + " "+basketctxproduct.length}items)</Link></h1>
        <div className="payment_container">
            <div >
               <div className="Address_details">
               <h3>Address Details</h3>
               {!openform&&<button className="Address_button" onClick={onclick}> Enter Address details</button>}
                {openform&&<Orderform come={comehandler} openform={openform}/>}
                </div><hr/>
                
               
              {!displaydetails&&<div className="details"><p>{}</p>
                <p>Name   :{userdata[0]}</p>
                <p>Street :{userdata[1]}</p>
                <p>City   :{userdata[2]}</p>
                <p>Contact:{userdata[3]}</p>
                <p>Email  :{}</p>
                </div>}
           
            </div>
            <div className="payment_section">
                <div claasName="h3">
                <h3>Review:</h3>
                </div>
                
                <div className="order_products">
                {basketctxproduct.map(product=>(<Basketproduct
            id={product.id}
            title={product.name}
            image={product.image}
            price={product.price}
            rating={product.rating}
            onremove={removeproducthandler.bind(null,product.id)}
            />))}
            
                </div>
             


            </div>
           
            
        </div>
            </div> :<div className="Thanks">Your Order Placed Successfully!</div>}
        
        <div>
            
                    {orderbutton&&<button  onClick={orderhandler} className="order_button">Order</button>}

                </div>
  
        </div>
    )
}

export default Payment;
