import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Header from "./Components/Header";
import Home from "../src/Pages/Home/index";
import About from "./Pages/About/index";
import Error from "./Components/Error/index";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
