import React from 'react';

export default class Row extends React.Component {
    render () {
        const {label, children} = this.props;

        return <div className="row">
            <label>{label}</label>
            {children}
        </div>;
    }
}