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
  }
}

export default RightComponent;
