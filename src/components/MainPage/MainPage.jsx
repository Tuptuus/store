import React from "react";
import Header from "../header/Header";
import LeftMenu from "../LeftMenu/LeftMenu";
import RightComponent from "../RightComponent/RightComponent";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="MainPage">
      <div className="MainPage__Top">
        <Header />
      </div>
      <div className="MainPage__Bottom">
        <LeftMenu />
        <RightComponent />
      </div>
    </div>
  );
}

export default MainPage;
