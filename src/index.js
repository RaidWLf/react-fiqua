import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Sec1 from "./components/Sec1";
import Sec2 from "./components/Sec2";
import Sec3 from "./components/Sec3";
import Sec4 from "./components/Sec4";
import Sec5 from "./components/Sec5";
import Sec6 from "./components/Sec6";
import Sec7 from "./components/Sec7";
import Sec8 from "./components/Sec8";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Sec1 />
    <Sec2 />
    <Sec3 />
    <Sec4 />
    <Sec5 />
    <Sec6 />
    <Sec7 />
    <Sec8 />
  </React.StrictMode>
);
