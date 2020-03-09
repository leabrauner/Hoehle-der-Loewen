import React from "react";

import {ChangeView} from "../actions";
import {VIEWS} from "../constants";

class MenuItem extends React.Component {
    render () {
        const { name, type, active } = this.props;
        console.log(active, type)
        const isSelected = active === type ? 'selected' : '';
        const setView = () => ChangeView(type);

        return <div className={`item ${isSelected}`} onClick={setView}>
            {name}
        </div>;
    }
}

export default class Menu extends React.Component {
    render() {
        const { view } = this.props;
        return <div className="menu">
            <MenuItem name="Home" type={VIEWS.HOME} active={view} />
            <MenuItem name="Übersicht" type={VIEWS.OVERVIEW} active={view} />
            <MenuItem name="Abstimmung" type={VIEWS.POLL} active={view} />
            <MenuItem name="Bearbeiten" type={VIEWS.EDIT} active={view} />
        </div>;
    }
}