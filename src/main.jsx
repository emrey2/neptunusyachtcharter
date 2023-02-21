import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Gallery from "./routes/Gallery";
import Contact from "./routes/Contact";
import Detail from "./routes/Detail";
import Detail2 from "./routes/Detail2";
import Detail3 from "./routes/Detail3";
import Detail4 from "./routes/Detail4";
import Detail5 from "./routes/Detail5";
import Detail6 from "./routes/Detail6";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/detail2" element={<Detail2 />} />
      <Route path="/detail3" element={<Detail3 />} />
      <Route path="/detail4" element={<Detail4 />} />
      <Route path="/detail5" element={<Detail5 />} />
      <Route path="/detail6" element={<Detail6 />} />
    </Routes>
  </BrowserRouter>
);
