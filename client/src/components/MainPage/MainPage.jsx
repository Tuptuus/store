import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import LeftMenu from "../LeftMenu/LeftMenu";
import RightComponent from "../RightComponent/RightComponent";
import "./MainPage.css";

function MainPage() {
  const [currentCategory, setCurrentCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentCategory(
      JSON.parse(window.localStorage.getItem("currentCategory"))
    );
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "currentCategory",
      JSON.stringify(currentCategory)
    );
  }, [currentCategory]);

  const selectedCategory = (category) => {
    setCurrentCategory(category);
    navigate(`/${category}`);
  };

  const backToMainPage = () => {
    navigate("/");
    setCurrentCategory("");
  };

  return (
    <div className="MainPage">
      <div className="MainPage__Top">
        <Header backToMainPage={backToMainPage} />
      </div>
      <div className="MainPage__Bottom">
        <LeftMenu
          selectedCategory={selectedCategory}
          currentCategory={currentCategory}
        />
        <RightComponent />
      </div>
    </div>
  );
}

export default MainPage;
