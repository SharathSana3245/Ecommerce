import React,{useContext} from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import Basketproduct from "./Basketproduct";
import BasketContext from "./Basketcontext";

function Checkout(props) {
    const basketctx=useContext(BasketContext);
    const basketctxproduct=basketctx.products;
    // console.log(basketctxproduct,"basketctxproduct");
    const removeproducthandler=(id)=>{
      console.log(id,"id")
      basketctx.removeproduct(id)

    }
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_offerimage"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon prime"
        />
        <div>
          <h3>{props.user?.email}</h3>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            </div>
            {basketctxproduct.map(product=>(<Basketproduct
            id={product.id}
            title={product.name}
            image={product.image}
            price={product.price}
            rating={product.rating}
            onremove={removeproducthandler.bind(null,product.id)}
            />))}
            
        </div>
      
      <div className="checkout_right">
          <Subtotal/>
       

      </div>
    </div>
  );
}

export default Checkout;
