import React from "react";
import "./TopAd.css";
import iphoneAdSlider from "../../../../assets/iphoneAdSlider.png";
import samsungAdSlider from "../../../../assets/samsungAdSlider.png";
import huaweiAdSlider from "../../../../assets/huaweiAdSlider.png";
import realmeAdSlider from "../../../../assets/realmeAdSlider.png";

function TopAd() {
  return (
    <div className="TopContainer">
      <div className="TopContainer__Slider">
        {/* <div className="TopContainer__Slider__Slide">
          <img src={iphoneAdSlider} alt="" />
        </div> */}
        {/* <div className="TopContainer__Slider__Slide">
          <img src={samsungAdSlider} alt="" />
        </div> */}
        <div className="TopContainer__Slider__Slide">
          <img src={huaweiAdSlider} alt="" />
        </div>
        {/* <div className="TopContainer__Slider__Slide">
          <img src={realmeAdSlider} alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default TopAd;
