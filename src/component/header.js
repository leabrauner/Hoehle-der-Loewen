import React from "react";

import LogoImage from '../img/logo.png';
import HeaderImage from "../img/header.png";

export default class Header extends React.Component{
    render() {
        return <div className="header">
            <div className="logo">
                <img src={LogoImage} />
            </div>
            <div className="app-header">
                <img src={HeaderImage}  />
            </div>
        </div>;
    }

}