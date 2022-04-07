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
          <div
            className={`LeftMenu__MenuList__Item ${
              currentCategory === "Mobiles" ? "SelectedCategory" : null
            }`}
          >
            <span>{Mobile}</span>Mobile Phones{" "}
          </div>
          <div className="LeftMenu__MenuList__Arrow">{Arrow}</div>
        </li>
        <li onClick={() => selectedCategory("Laptops")}>
          <div
            className={`LeftMenu__MenuList__Item ${
              currentCategory === "Laptops" ? "SelectedCategory" : null
            }`}
          >
            <span>{Laptop}</span>Laptops
          </div>
          <div className="LeftMenu__MenuList__Arrow">{Arrow}</div>
        </li>
        <li onClick={() => selectedCategory("Tablets")}>
          <div
            className={`LeftMenu__MenuList__Item ${
              currentCategory === "Tablets" ? "SelectedCategory" : null
            }`}
          >
            <span>{Tablet}</span>Tablets
          </div>
          <div className="LeftMenu__MenuList__Arrow">{Arrow}</div>
        </li>
        <li onClick={() => selectedCategory("Television")}>
          <div
            className={`LeftMenu__MenuList__Item ${
              currentCategory === "Television" ? "SelectedCategory" : null
            }`}
          >
            <span>{Television}</span>Television
          </div>
          <div className="LeftMenu__MenuList__Arrow">{Arrow}</div>
        </li>
        <li onClick={() => selectedCategory("Network")}>
          <div
            className={`LeftMenu__MenuList__Item ${
              currentCategory === "Network" ? "SelectedCategory" : null
            }`}
          >
            <span>{Wifi}</span>Networking Products
          </div>
          <div className="LeftMenu__MenuList__Arrow">{Arrow}</div>
        </li>
        <li onClick={() => selectedCategory("Accessories")}>
          <div
            className={`LeftMenu__MenuList__Item ${
              currentCategory === "Accessories" ? "SelectedCategory" : null
            }`}
          >
            <span>{Headphones}</span>Accesories
          </div>
          <div className="LeftMenu__MenuList__Arrow">{Arrow}</div>
        </li>
        <li onClick={() => selectedCategory("Computer")}>
          <div
            className={`LeftMenu__MenuList__Item ${
              currentCategory === "Computer" ? "SelectedCategory" : null
            }`}
          >
            <span>{Computer}</span>Computer Accessories
          </div>
          <div className="LeftMenu__MenuList__Arrow">{Arrow}</div>
        </li>
        <li onClick={() => selectedCategory("Gaming")}>
          <div
            className={`LeftMenu__MenuList__Item ${
              currentCategory === "Gaming" ? "SelectedCategory" : null
            }`}
          >
            <span>{Gamepad}</span>Gaming Zone
          </div>
          <div className="LeftMenu__MenuList__Arrow">{Arrow}</div>
        </li>
      </ul>
    </div>
  );
}

export default LeftMenu;
