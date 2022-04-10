import React, { useState } from "react";
import "./LeftMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faLaptop,
  faTablet,
  faComputer,
  faTelevision,
  faHeadphones,
  faGamepad,
  faWifi,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Mobile = <FontAwesomeIcon icon={faMobile} />;
const Laptop = <FontAwesomeIcon icon={faLaptop} />;
const Tablet = <FontAwesomeIcon icon={faTablet} />;
const Computer = <FontAwesomeIcon icon={faComputer} />;
const Television = <FontAwesomeIcon icon={faTelevision} />;
const Headphones = <FontAwesomeIcon icon={faHeadphones} />;
const Gamepad = <FontAwesomeIcon icon={faGamepad} />;
const Wifi = <FontAwesomeIcon icon={faWifi} />;
const Arrow = <FontAwesomeIcon icon={faAngleRight} />;

function LeftMenu(props) {
  const location = useLocation();
  return (
    <div className="LeftMenu">
      <ul className="LeftMenu__MenuList">
        <li onClick={() => props.selectedCategory("MobilePhones")}>
          <div className={"LeftMenu__MenuList__Container"}>
            <div className="LeftMenu__MenuList__Container__Item">
              <span>{Mobile} Mobile Phones</span>
              <span
                className={`LeftMenu__MenuList__Container__Underline ${
                  location.pathname === "/MobilePhones" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              location.pathname === "/MobilePhones" ? "ArrowOn" : null
            }`}
          >
            {Arrow}
          </div>
        </li>
        <li onClick={() => props.selectedCategory("Laptops")}>
          <div className={"LeftMenu__MenuList__Container"}>
            <div className="LeftMenu__MenuList__Container__Item">
              <span>{Laptop} Laptops</span>
              <span
                className={`LeftMenu__MenuList__Container__Underline ${
                  location.pathname === "/Laptops" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              location.pathname === "/Laptops" ? "ArrowOn" : null
            }`}
          >
            {Arrow}
          </div>
        </li>
        <li onClick={() => props.selectedCategory("Tablets")}>
          <div className={"LeftMenu__MenuList__Container"}>
            <div className="LeftMenu__MenuList__Container__Item">
              <span>{Tablet} Tablets</span>
              <span
                className={`LeftMenu__MenuList__Container__Underline ${
                  location.pathname === "/Tablets" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              location.pathname === "/Tablets" ? "ArrowOn" : null
            }`}
          >
            {Arrow}
          </div>
        </li>
        <li onClick={() => props.selectedCategory("ComputerAccessories")}>
          <div className={"LeftMenu__MenuList__Container"}>
            <div className="LeftMenu__MenuList__Container__Item">
              <span>{Computer} Computer Accessories</span>
              <span
                className={`LeftMenu__MenuList__Container__Underline ${
                  location.pathname === "/ComputerAccessories"
                    ? "UnderlineOn"
                    : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              location.pathname === "/ComputerAccessories" ? "ArrowOn" : null
            }`}
          >
            {Arrow}
          </div>
        </li>
        <li onClick={() => props.selectedCategory("Television")}>
          <div className={"LeftMenu__MenuList__Container"}>
            <div className="LeftMenu__MenuList__Container__Item">
              <span>{Television} Television</span>
              <span
                className={`LeftMenu__MenuList__Container__Underline ${
                  location.pathname === "/Television" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              location.pathname === "/Television" ? "ArrowOn" : null
            }`}
          >
            {Arrow}
          </div>
        </li>
        <li onClick={() => props.selectedCategory("NetworkProducts")}>
          <div className={"LeftMenu__MenuList__Container"}>
            <div className="LeftMenu__MenuList__Container__Item">
              <span>{Wifi} Networking Products</span>
              <span
                className={`LeftMenu__MenuList__Container__Underline ${
                  location.pathname === "/NetworkProducts"
                    ? "UnderlineOn"
                    : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              location.pathname === "/NetworkProducts" ? "ArrowOn" : null
            }`}
          >
            {Arrow}
          </div>
        </li>
        <li onClick={() => props.selectedCategory("Accessories")}>
          <div className={"LeftMenu__MenuList__Container"}>
            <div className="LeftMenu__MenuList__Container__Item">
              <span>{Headphones} Accessories</span>
              <span
                className={`LeftMenu__MenuList__Container__Underline ${
                  location.pathname === "/Accessories" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              location.pathname === "/Accessories" ? "ArrowOn" : null
            }`}
          >
            {Arrow}
          </div>
        </li>
        <li onClick={() => props.selectedCategory("GamingZone")}>
          <div className={"LeftMenu__MenuList__Container"}>
            <div className="LeftMenu__MenuList__Container__Item">
              <span>{Gamepad} Gaming Zone</span>
              <span
                className={`LeftMenu__MenuList__Container__Underline ${
                  location.pathname === "/GamingZone" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              location.pathname === "/GamingZone" ? "ArrowOn" : null
            }`}
          >
            {Arrow}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default LeftMenu;
