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
          <Route path="MobilePhones" element={<MainPage />}>
            <Route path=":itemID" element={<MainPage />} />
          </Route>
          <Route path="Laptops" element={<MainPage />}>
            <Route path=":itemID" element={<MainPage />} />
          </Route>
          <Route path="Tablets" element={<MainPage />}>
            <Route path=":itemID" element={<MainPage />} />
          </Route>
          <Route path="ComputerAccessories" element={<MainPage />} />
          <Route path="Television" element={<MainPage />} />
          <Route path="NetworkProducts" element={<MainPage />} />
          <Route path="Accessories" element={<MainPage />} />
          <Route path="GamingZone" element={<MainPage />} />
          <Route path="adminpanel" element={<AdminPanel />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
