import React, { useState, useEffect } from "react";
import axios from "axios";
import "../products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const cartPlusIcon = <FontAwesomeIcon icon={faShoppingBag} />;
function MobilePhones() {
  const [listOfPhonesData, setListOfPhonesData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3001/getMobile");
      setListOfPhonesData(response.data);
      console.log(response.data);
    };
    getData();
  }, []);

  const clickIcon = () => {
    console.log("Icon click");
  };
  const clickItem = () => {
    console.log("Item click");
  };

  const listOfPhones = listOfPhonesData.map(
    ({ Title, Price, Picture, Screen, Processor, System, Memory }) => (
      <div onClick={clickItem} className="productsContainer__Item">
        <div className="productsContainer__Item__Top">
          <div className="productsContainer__Item__Top__ImageContainer">
            <img
              className="productsContainer__Item__Top__ImageContainer__Img"
              src={Picture}
              alt=""
            />
          </div>
        </div>
        <div className="productsContainer__Item__Bottom">
          <div className="productsContainer__Item__Bottom__Title">
            <p>{Title}</p>
          </div>
          <div className="productsContainer__Item__Bottom__InfoContainer">
            <p className="productsContainer__Item__Bottom__InfoContainer__Info">
              Screen: {Screen}"
            </p>
            <p className="productsContainer__Item__Bottom__InfoContainer__Info">
              Processor: {Processor}
            </p>
            <p className="productsContainer__Item__Bottom__InfoContainer__Info">
              Memory: {Memory}GB
            </p>
            <p className="productsContainer__Item__Bottom__InfoContainer__Info">
              System: {System}
            </p>
          </div>
          <div className="productsContainer__Item__Bottom__PriceContainer">
            <p>{Price}zł</p>
            <span
              onClick={clickIcon}
              className="productsContainer__Item__Bottom__PriceContainer__AddItem"
            >
              {cartPlusIcon}
            </span>
          </div>
        </div>
      </div>
    )
  );

  return (
    <div className="productsContainer">
      <div className="productsContainer__overflowContainer">{listOfPhones}</div>
    </div>
  );
}

export default MobilePhones;
