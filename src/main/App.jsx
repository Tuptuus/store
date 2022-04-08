import React from "react";
import "../components/header/Header.css";
import "./App.css";
import MainPage from "../components/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
