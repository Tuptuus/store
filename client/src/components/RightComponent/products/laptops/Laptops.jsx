import React, { useEffect, useState } from "react";
import axios from "axios";

function Laptops(props) {
  const { clickItem } = props;
  const [listOfLaptopsData, setListOfLaptopsData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3001/getLaptops");
      setListOfLaptopsData(response.data);
    };
    getData();
  }, []);
  const listOfLaptops = listOfLaptopsData.map(
    ({ _id, Title, Price, Picture, Screen, Processor, System, Memory }) => (
      <div
        onClick={() => clickItem(_id, "Laptops")}
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
          </div>
        </div>
      </div>
    )
  );
  return (
    <div className="productsContainer">
      <div className="productsContainer__overflowContainer">
        {listOfLaptops}
      </div>
    </div>
  );
}

export default Laptops;
