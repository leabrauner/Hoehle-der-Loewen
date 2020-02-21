import React from "react";

export default class Menu extends React.Component{
    render() {
        return <div className="menu">
            <div className="item">Home</div>
            <div className="item">Übersicht</div>
            <div className="item">Abstimmung</div>
            <div className="item">Bearbeiten</div>
        </div>;
    }
}