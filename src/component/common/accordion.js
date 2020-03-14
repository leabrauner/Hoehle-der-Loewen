import React from 'react';

export default class Accordion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    toggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        const {open} = this.state;
        const {title, children} = this.props;
        const hidden = open ? '' : 'hidden';

        return <div className="accordion">
            <div className="header" onClick={() => this.toggle()}>
                <span>{title}</span>
                <button>{open ? 'close' : 'open'}</button>
            </div>
            <div className={`body ${hidden}`}>
                {children}
            </div>
        </div>
    }
}