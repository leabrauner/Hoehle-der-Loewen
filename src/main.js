import React from "react"
import ReactDOM from "react-dom"
import App from "./component/app";
import SCSS from "./style/app.scss"

window.onload = () => {
    const id = document.getElementById("main");

    ReactDOM.render(<App/>, id);
};