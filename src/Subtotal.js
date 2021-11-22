import React,{useContext,useState} from 'react';
import './Subtotal.css';
import BasketContext from './Basketcontext';
import {Link} from 'react-router-dom';


function Subtotal(props) {


 const basketstore=useContext(BasketContext);
 
 

 const noofbasketproducts=basketstore.products.length;
 const fillproducts=noofbasketproducts>0;
 const greaterthan=noofbasketproducts>=10;
 const totalpriceinbasket=basketstore.price;
    return (
        <div>
        <div className="subtotal">
          <h3><strong>Total products:{greaterthan?noofbasketproducts:"0"+noofbasketproducts}</strong></h3>
          <h3><strong>Total Price:₹{totalpriceinbasket}</strong></h3>
         {fillproducts && <Link to='/payment'><button className="subtotal_button">Proceed to Checkout</button></Link>}
        </div>
     
        </div>
    )
}

export default Subtotal;
