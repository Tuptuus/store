import React, { useState, useEffect } from "react";
import axios from "axios";
import "../products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const cartPlusIcon = <FontAwesomeIcon icon={faShoppingBag} />;
function MobilePhones() {
  const [listOfPhonesData, setListOfPhonesData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3001/getMobileOne", {
        ide: "625495781bbbf60c1d227799",
      });
      setListOfPhonesData(response.data);
    };
    getData();
  }, []);

  const clickItem = (itemID, type) => {
    if (type === "Item") {
      console.log(itemID);
      console.log(type);
      // navigate(`/MobilePhones/${itemID}`);
    } else if (type === "Icon") {
      console.log("witam");
    }
  };

  const listOfPhones = listOfPhonesData.map(
    ({ _id, Title, Price, Picture, Screen, Processor, System, Memory }) => (
      <div
        onClick={() => clickItem(_id, "Item")}
        className="productsContainer__Item"
      >
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
            <div className="productsContainer__Item__Bottom__PriceContainer__AddItem">
              <span
                onClick={() => clickItem(null, "Icon")}
                className="productsContainer__Item__Bottom__PriceContainer__AddItem__Icon"
              >
                {cartPlusIcon}
              </span>
            </div>
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
