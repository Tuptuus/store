import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faCheck,
  faTruck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const cartPlusIcon = <FontAwesomeIcon icon={faCartPlus} />;
const availableIcon = <FontAwesomeIcon icon={faCheck} />;
const deliveryIcon = <FontAwesomeIcon icon={faTruck} />;
const clockIcon = <FontAwesomeIcon icon={faClock} />;

function ProductComponent(props) {
  const { currentItemID, currentTypeOfProducts } = props;
  const [currentProduct, setCurrentProduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.post("http://localhost:3001/getProduct", {
        productID: currentItemID,
        currentType: currentTypeOfProducts,
      });
      setCurrentProduct(response.data);
    };
    getData();
    console.log("działa");
  }, [currentItemID, currentTypeOfProducts]);

  const product = currentProduct.map(
    ({
      Title,
      System,
      Screen,
      Processor,
      Price,
      Picture,
      Memory,
      Mark,
      Desc,
      RAM,
      Graphics,
      Amount,
    }) => (
      <div className="productContainer">
        <div className="productContainer__Top">
          <div className="productContainer__Top__Left">
            <img src={Picture} alt="" />
          </div>
          <div className="productContainer__Top__Middle">
            <p className="productContainer__Top__Middle__Title">{Title}</p>
            <p className="productContainer__Top__Middle__Info">
              {System ? <p>System:{System}</p> : null}
              {Screen ? <p>Screen:{Screen}"</p> : null}
              {Processor ? <p>Processor:{Processor}</p> : null}
              {Memory ? <p>Memory:{Memory}GB</p> : null}
              {RAM ? <p>RAM:{RAM}GB</p> : null}
              {Graphics ? <p>Graphics:{Graphics}</p> : null}
            </p>
          </div>
          <div className="productContainer__Top__Right">
            <div className="productContainer__Top__Right__BuyContainer">
              <div className="productContainer__Top__Right__BuyContainer__Main">
                <p>{Price}zł</p>
                <div className="productContainer__Top__Right__BuyContainer__Main__Under">
                  <select
                    className="productContainer__Top__Right__BuyContainer__Main__SelectAmount"
                    name=""
                    id=""
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                  {Amount > 0 ? (
                    <div className="productContainer__Top__Right__BuyContainer__Main__Btn">
                      {cartPlusIcon} Add To Cart
                    </div>
                  ) : (
                    <div className="productContainer__Top__Right__BuyContainer__Main__BtnDisable">
                      {cartPlusIcon} Add To Cart
                    </div>
                  )}
                </div>
              </div>
              <div className="productContainer__Top__Right__BuyContainer__InfoContainer">
                <div className="productContainer__Top__Right__BuyContainer__InfoContainer__Info">
                  <div className="productContainer__Top__Right__BuyContainer__InfoContainer__Info__Left">
                    <div className="productContainer__Top__Right__BuyContainer__InfoContainer__Info__Left__Icon">
                      {availableIcon}
                    </div>
                  </div>
                  <div className="productContainer__Top__Right__BuyContainer__InfoContainer__Info__Right">
                    {Amount > 0 ? "In Stock" : "Out of Stock"}
                  </div>
                </div>
                <div className="productContainer__Top__Right__BuyContainer__InfoContainer__Info">
                  <div className="productContainer__Top__Right__BuyContainer__InfoContainer__Info__Left">
                    <div className="productContainer__Top__Right__BuyContainer__InfoContainer__Info__Left__Icon">
                      {deliveryIcon}
                    </div>
                  </div>
                  <div className="productContainer__Top__Right__BuyContainer__InfoContainer__Info__Right">
                    {Price >= 999
                      ? "Free delivery"
                      : "Free delivery from 999zł"}
                  </div>
                </div>
                <div className="productContainer__Top__Right__BuyContainer__InfoContainer__Info">
                  <div className="productContainer__Top__Right__BuyContainer__InfoContainer__Info__Left">
                    <div className="productContainer__Top__Right__BuyContainer__InfoContainer__Info__Left__Icon">
                      {clockIcon}
                    </div>
                  </div>
                  <div className="productContainer__Top__Right__BuyContainer__InfoContainer__Info__Right">
                    Order now, pick up on Tuesday
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productContainer__Bottom">
          <div className="productContainer__Bottom__DescriptionTitle">
            Description
          </div>
          <div className="productContainer__Bottom__DescriptionContent">
            {Desc}
          </div>
        </div>
      </div>
    )
  );

  return <>{product}</>;
}

export default ProductComponent;
