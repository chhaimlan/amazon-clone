import { Search, ShoppingBasket } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      signOut(auth);
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbaByGVPZPrgh355Mezd3ylroYiLABc49Kgw&usqp=CAU"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <Search className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionOne">
              Hello, {!user ? "Lan" : user.email}
            </span>
            <span className="header_otpionTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionOne">Return</span>
            <span className="header_otpionTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/">
          <div className="header_option">
            <span className="header_optionOne">Your</span>
            <span className="header_otpionTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optiontwo_baskecount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
