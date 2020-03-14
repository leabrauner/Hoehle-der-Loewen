import React from "react";

import Home from './pages/home';
import Overview from './pages/overview';
import Poll from './pages/poll';
import Admin from './pages/admin';
import {VIEWS} from "../constants";

export default class Content extends React.Component {

    getView() {
        switch (this.props.view) {
            case VIEWS.HOME:
                return Home;
            case VIEWS.OVERVIEW:
                return Overview;
            case VIEWS.POLL:
                return Poll;
            case VIEWS.EDIT:
                return Admin;
            default:
                return () => <div>404</div>;
        }
    }

    render() {
        const View = this.getView();

        return <div className="content">
            <View {...this.props}/>
        </div>;
    }
}