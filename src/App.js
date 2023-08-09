/** @format */

import React from "react";
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import "./App.css";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
