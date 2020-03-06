import React from "react"
import ReactDOM from "react-dom"
import App from "./component/app";
import Store from "./state/state";

import SCSS from "./style/app.scss"

window.onload = () => {
    const id = document.getElementById("main");

    Store.observe(state => ReactDOM.render(<App {...state}/>, id));
};