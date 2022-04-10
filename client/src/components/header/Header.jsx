import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const MagnifyingGlass = <FontAwesomeIcon icon={faMagnifyingGlass} />;
const ShoppingCart = <FontAwesomeIcon icon={faShoppingCart} />;
const User = <FontAwesomeIcon icon={faUser} />;

function Header(props) {
  return (
    <div className="Header">
      <div onClick={props.backToMainPage} className="Header__Logo">
        <span className="Header__Logo__TopLogo">Tup</span>
        <span className="Header__Logo__BottomLogo">Store</span>
      </div>
      <div className="Header__Search">
        <span className="Header__Search__Icon">{MagnifyingGlass}</span>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        <input
          placeholder="Search item"
          type="text"
          className="Header__Search__Input"
        />
        <buttton className="Header__Search--search">Search</buttton>
      </div>
      <div className="Header__Right">
        <div className="Header__Right__Trolley">
          <span className="Trolley_Icon">{ShoppingCart}</span>
        </div>
        <div className="Header__Right__User">
          <span className="User_Icon">{User}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
