import React,{useContext} from "react";
import "./Product.css";
import BasketContext from "./Basketcontext";

function Product({id,title,image,price,rating}) {
   const basketcontxt=useContext(BasketContext);
   const addproducthandler=()=>{
     basketcontxt.addproduct({
       id:id,
       name:title,
       price:price,
       rating:rating,
       image:image
     })
   }



  return (
    <div className="product">
      <div className="product_info">
        
        <p>{title}</p>
        <p className="product_price">
          
          <strong><small>₹</small>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_,i)=>( <p>⭐</p>))}
         
        </div>
      </div>

      <img
        className="product_image"
        src={image}
        alt="product_img"
      />
      <button onClick={addproducthandler} className="product_Addcartbutton">Add to basket</button>
    </div>
  );
}

export default Product;
