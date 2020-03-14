import React from "react";
import {DURATION} from "../../../constants";

export default class Options extends React.Component {
    render() {
        const {setDuration, duration} = this.props;

        const options = Object.keys(DURATION).map(key => DURATION[key]).map(value => {
            return <option key={value} onChange={() => setDuration(value)}>{value}</option>;
        });

        return <div className="panel options">
            <select selected={duration}>
                {options}
            </select>
            <span>minutes</span>
        </div>;
    }
}