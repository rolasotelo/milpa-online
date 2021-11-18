import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import "./i18n";

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
