import React from "react";
import "./BottomAds.css";
import test from "./test.png";

function BottomAds() {
  return (
    <div className="BottomContainer">
      <div className="BottomContainer__Block">Reklama</div>
      <div className="BottomContainer__Block">Reklama</div>
      <div className="BottomContainer__Block">
        <img src={test} alt="" />
      </div>
    </div>
  );
}

export default BottomAds;
