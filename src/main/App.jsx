import React from "react";
import "../components/header/Header.css";
import "./App.css";
import MainPage from "../components/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import AdminPanel from "../components/AdminPanel/AdminPanel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="adminpanel" element={<AdminPanel />} />
          <Route path="e" element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
