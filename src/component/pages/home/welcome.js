import React from "react";

export default class Welcome extends React.Component {
    render() {
        const {user, ideas} = this.props;

        return <div className="welcome">
            Willkommen, {user.email}. Aktuell sind {ideas.length} Ideen registriert.
        </div>;
    }
}