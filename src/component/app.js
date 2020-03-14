import React from "react";

import Header from "./header";
import Menu from "./menu";
import Content from "./content";

export default class App extends React.Component{
    render() {
        const  { view, user } = this.props;

        return <div className="app">
            <Header/>
            <Menu view={view} user={user} />
            <Content {...this.props}/>
        </div>;
    }
}