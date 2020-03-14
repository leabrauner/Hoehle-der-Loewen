import React from "react";
import LoginForm from "./login";
import Info from "./info";
import Welcome from "./welcome";

export default class Home extends React.Component {
    render() {
        const {user, ideas, error} = this.props;
        const View = user == null ? LoginForm : Welcome;

        return <div className="home">
            <h3>Home</h3>
            <View user={user} ideas={ideas} error={error}/>
            <Info/>
        </div>;
    }
}