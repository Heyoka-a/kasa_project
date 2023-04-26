import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Header from "./Components/Header";
import Home from "../src/Pages/Home/index";
import About from "./Pages/About/index";
import Error from "./Components/Error/index";
import Flat from "./Pages/Flat/index";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/flat/:getFlatId" element={<Flat />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
