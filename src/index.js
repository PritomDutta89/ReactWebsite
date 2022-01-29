import React from "react";
import ReactDom from "react-dom";
// import App from "./App";
import App3 from "./Project-1-Responsive-Website/App3";
import { BrowserRouter } from "react-router-dom";
import "./Project-1-Responsive-Website/index3.css";


// import {add,sub,mul,div} from "./Calculator";
// import "./style.css";

ReactDom.render(
  <>
    <BrowserRouter>
      <App3 />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
