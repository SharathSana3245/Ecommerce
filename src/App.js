import React,{useEffect,useState} from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import BasketProvider from './BasketProvider';
import Loginpage from "./Loginpage";
import {auth} from "./Firebase";
// import BasketContext from "./Basketcontext";
import Payment from "./Payment";


function App(props) {
  const[userdata,setuserdata]=useState(null)
  // const basketctx=useContext(BasketContext);
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      // console.log(authUser);

      if(authUser){
        return setuserdata(authUser)

      }
      else{
        return setuserdata(null)
      }
   
    },[])
  })
  // console.log(userdata)
  return (
    <BasketProvider>
       <Router>
      <div className="app">
     
        <Switch>
          <Route path="/checkout">
          <Header user={userdata} />
            <Checkout user={userdata}/>
          </Route>
           <Route path="/payment">
            <Header/>
          <Payment/>
          </Route>
          <Route path="/Login">
            <Loginpage/>
          </Route>
          <Route path="/">
          <Header user={userdata} />
            <Home />
          </Route>
         
        </Switch>
      </div>
    </Router>
    </BasketProvider>
   
  );
}

export default App;
