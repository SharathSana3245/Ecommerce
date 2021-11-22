import React from "react";

const BasketContext = React.createContext({
  products: [],
  price: 0,
  userdata:null,
  addproduct: () => {},
  removeproduct: () => {},
  userdatahand:()=>{},
  onclear:()=>{}
});
export default BasketContext;
