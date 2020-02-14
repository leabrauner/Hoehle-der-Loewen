import React from "react"
import ReactDOM from "react-dom"
import App from "./component/app";
import SCSS from "./style/app.scss"

const id=document.getElementById("main")
console.log(id)
ReactDOM.render(<App/>, id)