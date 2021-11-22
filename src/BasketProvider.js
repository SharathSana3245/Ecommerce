import BasketContext from "./Basketcontext";
import React,{useReducer} from 'react';

const defaultbasketstate={
    products:[],
    price:0,
   
};

const basketreducer=(state,action)=>{
    if(action.type==="REMOVE_PRODUCT"){
        const existproductindex=state.products.findIndex(product=>product.id===action.id);
        console.log(existproductindex);
        console.log(state.products)
        const existingproduct=state.products[existproductindex];
        console.log(existingproduct)
        const updatedprice=state.price-existingproduct.price;
        console.log(updatedprice)
        const newproducts=state.products.filter((item)=> item.id !==existingproduct.id)
        console.log(newproducts)
        console.log(state.products)
        return{
            products:newproducts,
            price:updatedprice
        }


    }
   
    if(action.type==="ADD_PRODUCT"){
        const updatedproducts=state.products.concat(action.product);
        const newprice=state.price+action.product.price;
        console.log( state.price,"price")
        console.log(newprice,"newprice")

        return{
            products:updatedproducts,
            
            price:newprice,
        }

   


    }
    if(action.type==="clearcart"){
        return defaultbasketstate
    }
    console.log(state.products)
    return defaultbasketstate;

};
function BasketProvider(props) {
    const [basketstate,dispatchbasketaction]=useReducer(basketreducer,defaultbasketstate);

    const addproducthandler=(product)=>{
        dispatchbasketaction({type:"ADD_PRODUCT",product:product})

    }
    const removeproducthandler=(id)=>{
        console.log(id)
        dispatchbasketaction({type:"REMOVE_PRODUCT",id:id});

    }
   const clearproducts=()=>{
       dispatchbasketaction({type:"clearcart"})
   }
    const basketcontext={
        products: basketstate.products,
        price: basketstate.price,
        userdata:basketstate.userdata,
        addproduct:addproducthandler,
        removeproduct:removeproducthandler,
        onclear:clearproducts,
        
       
    }
    return (
       <BasketContext.Provider value={basketcontext}>{props.children}</BasketContext.Provider>
    )
}


export default BasketProvider;
