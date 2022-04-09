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

const Mobile = <FontAwesomeIcon icon={faMobile} />;
const Laptop = <FontAwesomeIcon icon={faLaptop} />;
const Tablet = <FontAwesomeIcon icon={faTablet} />;
const Computer = <FontAwesomeIcon icon={faComputer} />;
const Television = <FontAwesomeIcon icon={faTelevision} />;
const Headphones = <FontAwesomeIcon icon={faHeadphones} />;
const Gamepad = <FontAwesomeIcon icon={faGamepad} />;
const Wifi = <FontAwesomeIcon icon={faWifi} />;
const Arrow = <FontAwesomeIcon icon={faAngleRight} />;

function LeftMenu() {
  const [currentCategory, setCurrentCategory] = useState("");
  const selectedCategory = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div className="LeftMenu">
      <ul className="LeftMenu__MenuList">
        <li onClick={() => selectedCategory("Mobiles")}>
          <div className={"LeftMenu__MenuList__Container"}>
            <div className="LeftMenu__MenuList__Container__Item">
              <span>{Mobile} Mobile Phones</span>
              <span
                className={`LeftMenu__MenuList__Container__Underline ${
                  currentCategory === "Mobiles" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              currentCategory === "Mobiles" ? "ArrowOn" : null
            }`}
          >
            {Arrow}
          </div>
        </li>
        <li onClick={() => selectedCategory("Laptops")}>
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
        <li onClick={() => selectedCategory("Tablets")}>
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
        <li onClick={() => selectedCategory("Computer")}>
          <div className={"LeftMenu__MenuList__Container"}>
            <div className="LeftMenu__MenuList__Container__Item">
              <span>{Computer} Computer Accessories</span>
              <span
                className={`LeftMenu__MenuList__Container__Underline ${
                  currentCategory === "Computer" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              currentCategory === "Computer" ? "ArrowOn" : null
            }`}
          >
            {Arrow}
          </div>
        </li>
        <li onClick={() => selectedCategory("Television")}>
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
        <li onClick={() => selectedCategory("Network")}>
          <div className={"LeftMenu__MenuList__Container"}>
            <div className="LeftMenu__MenuList__Container__Item">
              <span>{Wifi} Networking Products</span>
              <span
                className={`LeftMenu__MenuList__Container__Underline ${
                  currentCategory === "Network" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              currentCategory === "Network" ? "ArrowOn" : null
            }`}
          >
            {Arrow}
          </div>
        </li>
        <li onClick={() => selectedCategory("Accessories")}>
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
        <li onClick={() => selectedCategory("Gaming")}>
          <div className={"LeftMenu__MenuList__Container"}>
            <div className="LeftMenu__MenuList__Container__Item">
              <span>{Gamepad} Gaming Zone</span>
              <span
                className={`LeftMenu__MenuList__Container__Underline ${
                  currentCategory === "Gaming" ? "UnderlineOn" : null
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`LeftMenu__MenuList__Arrow ${
              currentCategory === "Gaming" ? "ArrowOn" : null
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
