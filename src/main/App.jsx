import React from "react";
import Header from "../components/header/Header";
import "../components/header/Header.css";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Bottom">
        <LeftMenu />
      </div>
    </div>
  );
}

export default App;
