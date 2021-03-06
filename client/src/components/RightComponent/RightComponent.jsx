import React, { useState, useEffect } from "react";
import "./RightComponent.css";
import TopAd from "./mainPageAds/TopAd/TopAd";
import BottomAds from "./mainPageAds/BottomAds/BottomAds";
import { useLocation, useNavigate } from "react-router-dom";
import MobilePhones from "./products/mobilePhones/MobilePhones";
import Laptops from "./products/laptops/Laptops";
import Tablets from "./products/tablets/Tablets";
import ProductComponent from "./productComponent/ProductComponent";

function RightComponent() {
  const navigate = useNavigate();
  const [currentItemID, setCurrentItemID] = useState("");
  const [currentTypeOfProducts, setCurrentTypeOfProducts] = useState("");

  useEffect(() => {
    setCurrentItemID(JSON.parse(window.localStorage.getItem("currentItemID")));
    setCurrentTypeOfProducts(
      JSON.parse(window.localStorage.getItem("currentTypeOfProducts"))
    );
  }, []);

  useEffect(() => {
    window.localStorage.setItem("currentItemID", JSON.stringify(currentItemID));
    window.localStorage.setItem(
      "currentTypeOfProducts",
      JSON.stringify(currentTypeOfProducts)
    );
  }, [currentItemID, currentTypeOfProducts]);

  const clickItem = (itemID, page) => {
    console.log("es");
    setCurrentItemID(itemID);
    if (page === "MobilePhones") {
      setCurrentTypeOfProducts("MobilePhones");
      navigate(`/MobilePhones/${itemID}`);
    } else if (page === "Laptops") {
      setCurrentTypeOfProducts("Laptops");
      // navigate(`/Laptops/${itemID}`);
    } else if (page === "Tablets") {
      setCurrentTypeOfProducts("Tablets");
      // navigate(`/Tablets/${itemID}`);
    }
  };

  const clickBagIcon = (itemID) => {
    console.log(`dodano ${itemID}`);
  };

  const location = useLocation();
  if (location.pathname === "/") {
    return (
      <div className="RightComponentAds">
        <TopAd />
        <BottomAds />
      </div>
    );
  } else if (location.pathname === "/MobilePhones") {
    return (
      <div className="RightComponentProducts">
        <MobilePhones clickItem={clickItem} clickBagIcon={clickBagIcon} />
      </div>
    );
  } else if (location.pathname === "/Laptops") {
    return (
      <div className="RightComponentProducts">
        <Laptops clickItem={clickItem} />
      </div>
    );
  } else if (location.pathname === "/Tablets") {
    return (
      <div className="RightComponentProducts">
        <Tablets clickItem={clickItem} />
      </div>
    );
  } else if (location.pathname === "/ComputerAccessories") {
    return (
      <div className="RightComponentComputerAccessories">
        computer accessories
      </div>
    );
  } else if (location.pathname === "/Television") {
    return <div className="RightComponentTelevision">television</div>;
  } else if (location.pathname === "/NetworkProducts") {
    return (
      <div className="RightComponentNetworkProducts">network products</div>
    );
  } else if (location.pathname === "/Accessories") {
    return <div className="RightComponentAccessories">accessories</div>;
  } else if (location.pathname === "/GamingZone") {
    return <div className="RightComponentGamingZone">gaming zone</div>;
  } else {
    return (
      <div className="RightComponentProducts">
        <ProductComponent
          currentTypeOfProducts={currentTypeOfProducts}
          currentItemID={currentItemID}
        />
      </div>
    );
  }
}

export default RightComponent;
