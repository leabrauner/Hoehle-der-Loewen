import React from "react";

import Header from "./header";
import Menu from "./menu";
import Content from "./content";

export default class App extends React.Component{
    render() {
        return <div className="app">
            <Header/>
            <Menu />
            <Content />
        </div>;
    }
}