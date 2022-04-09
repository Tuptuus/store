import React from "react";
import "./RightComponent.css";
import TopAd from "./mainPageAds/TopAd/TopAd";
import BottomAds from "./mainPageAds/BottomAds/BottomAds";
import { useLocation } from "react-router-dom";

function RightComponent() {
  const location = useLocation();
  if (location.pathname === "/") {
    return (
      <div className="RightComponentAds">
        <TopAd />
        <BottomAds />
      </div>
    );
  } else if (location.pathname === "/MobilePhones") {
    return <div className="RightComponentMobile">mobile phones</div>;
  } else if (location.pathname === "/Laptops") {
    return <div className="RightComponentLaptops">laptops</div>;
  } else if (location.pathname === "/Tablets") {
    return <div className="RightComponentTablets">tablets</div>;
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
  }
}

export default RightComponent;
