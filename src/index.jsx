import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Header from "./Components/Header";
import Home from "../src/Pages/Home/index";
import About from "./Pages/About/index";
import Error from "./Components/Error/index";
import Flat from "./Pages/Flat/index";
import Footer from "./Components/Footer/index";
import handleMainMinHeight from "./Components/Footer/handleMainMinHeight";

function Init() {
  useEffect(() => {
    handleMainMinHeight();
    window.addEventListener("resize", handleMainMinHeight);
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/flat/:getFlatId" element={<Flat />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

// ReactDOM.render(<Init />, document.getElementById("root"));
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Init />);
