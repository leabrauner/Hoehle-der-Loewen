import React from "react";

import Home from './pages/home';
import Overview from './pages/overview';

export default class Content extends React.Component{
    render() {
        return <div className="content">
            <Overview />
        </div>;
    }
}