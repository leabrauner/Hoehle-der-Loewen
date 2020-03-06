import React from "react";

import {ChangeView} from "../actions";
import {VIEWS} from "../constants";

class MenuItem extends React.Component {
    render () {
        const { name, type, active, disabled = false } = this.props;
        const isSelected = active === type ? 'selected' : '';
        const setView = () => ChangeView(type);

        if (disabled) {
            return <noscript />;
        }

        return <div className={`item ${isSelected}`} onClick={setView}>
            {name}
        </div>;
    }
}

export default class Menu extends React.Component {
    render() {
        const { view, user } = this.props;
        const editDisabled = user === null;

        return <div className="menu">
            <MenuItem name="Home" type={VIEWS.HOME} active={view} />
            <MenuItem name="Übersicht" type={VIEWS.OVERVIEW} active={view} />
            <MenuItem name="Abstimmung" type={VIEWS.POLL} active={view} />
            <MenuItem name="Bearbeiten" type={VIEWS.EDIT} active={view} disabled={editDisabled}/>
        </div>;
    }
}