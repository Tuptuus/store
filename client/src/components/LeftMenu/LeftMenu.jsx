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
  const { selectedCategory, currentCategory } = props;
  const location = useLocation();
  return (
    <div className="LeftMenu">
      <ul className="LeftMenu__MenuList">
        <li onClick={() => selectedCategory("MobilePhones")}>
          <div className={"LeftMenu__MenuList__Container"}>
            <div className="LeftMenu__MenuList__Container__Item">
              <span>{Mobile} Mobile Phones</span>
              <span
                className={`LeftMenu__MenuList__Container__Underline ${
                  currentCategory === "MobilePhones" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              currentCategory === "MobilePhones" ? "ArrowOn" : null
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
                  currentCategory === "Laptops" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              currentCategory === "Laptops" ? "ArrowOn" : null
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
                  currentCategory === "Tablets" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              currentCategory === "Tablets" ? "ArrowOn" : null
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
                  currentCategory === "ComputerAccessories"
                    ? "UnderlineOn"
                    : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              currentCategory === "ComputerAccessories" ? "ArrowOn" : null
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
                  currentCategory === "Television" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              currentCategory === "Television" ? "ArrowOn" : null
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
                  currentCategory === "NetworkProducts" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              currentCategory === "NetworkProducts" ? "ArrowOn" : null
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
                  currentCategory === "Accessories" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              currentCategory === "Accessories" ? "ArrowOn" : null
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
                  currentCategory === "GamingZone" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              currentCategory === "GamingZone" ? "ArrowOn" : null
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
