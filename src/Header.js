import React,{useContext} from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import BasketContext from "./Basketcontext";
import {auth } from './Firebase';

function Header(props) {
  const handlerlogin=()=>{
    if(props.user){
      auth.signOut();
    }

  }
  const basketcontext=useContext(BasketContext);
  const noofproductinbasket=basketcontext.products.length
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo "
          src=" https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" placeholder="Search"/>
        <SearchIcon className="header_SearchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!props.user && '/login'}>
        <div  onClick={handlerlogin} className="header_option">
          <span className="header_optionlineone">Hello,{props.user?props.user.email:"Guest"}</span>
          <span className="header_optionlinetwo">{props.user?  "SignOut" : "Sign-In" }</span>
        </div></Link>
       
        <div className="header_option">
          <span className="header_optionlineone">Returns</span>
          <span className="header_optionlinetwo">&Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineone">Your</span>
          <span className="header_optionlinetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionbasket">
            <ShoppingCartIcon />
            <span className="header_optionlinetwo header_basketCount">{noofproductinbasket}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
