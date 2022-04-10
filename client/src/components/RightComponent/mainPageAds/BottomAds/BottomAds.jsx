import React from "react";
import "./BottomAds.css";
import firstAd from "../../../../assets/firstAd.png";
import secondAd from "../../../../assets/secondAd.png";
import thirdAd from "../../../../assets/thirdAd.png";

function BottomAds() {
  return (
    <div className="BottomContainer">
      <div className="BottomContainer__Block">
        <img src={firstAd} alt="" />
      </div>
      <div className="BottomContainer__Block">
        <img src={secondAd} alt="" />
      </div>
      <div className="BottomContainer__Block">
        <img src={thirdAd} alt="" />
      </div>
    </div>
  );
}

export default BottomAds;
