import React from "react";

import Header from "./header";
import Menu from "./menu";
import Content from "./content";

export default class App extends React.Component{
    render() {
        const  { view, user, ideas } = this.props;

        console.log(view, user, ideas);

        return <div className="app">
            <Header/>
            <Menu view={view} />
            <Content view={view} />
        </div>;
    }
}