import React from "react";

import "./Basketproduct.css";
// import BasketContext from './Basketcontext';


function Basketproduct(props) {
  // const basketctx=useContext(BasketContext);
  
  return (
    <div className="basketproduct">
      <img className="basketproduct_image" src={props.image} alt="" />
      <div className="basketproduct_info">
        <p className="basketproduct_title"> {props.title}</p>
        <p className="basketproduct_price">
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        
        <div className="basketproduct_rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
           
        </div>

        <button  onClick={props.onremove}className="basketproduct_button">Remove from Basket</button>
      </div>
    </div>
  );
}


export default Basketproduct;
