import React from "react";

import HeaderImage from "../img/header.png";

export default class Header extends React.Component{
    render() {
        return <div className="header">
            <img src={HeaderImage}  />
        </div>;
    }

}