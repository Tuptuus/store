import React, { useEffect, useState } from "react";
import axios from "axios";

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
  }, [currentItemID]);
  // console.log(currentProduct);
  console.log(currentItemID);

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
              {Screen ? <p>Screen:{Screen}</p> : null}
              {Processor ? <p>Processor:{Processor}</p> : null}
              {Memory ? <p>Memory:{Memory}</p> : null}
              {RAM ? <p>RAM:{RAM}</p> : null}
              {Graphics ? <p>Graphics:{Graphics}</p> : null}
            </p>
          </div>
          <div className="productContainer__Top__Right">koszyk</div>
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
