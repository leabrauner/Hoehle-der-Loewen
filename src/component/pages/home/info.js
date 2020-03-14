import React from "react";
import {PAWS} from "../../../constants";

class Paw extends React.Component {
    render() {
        const {paw, select} = this.props;

        return <div className="paw" onClick={() => select(paw)}>
            <img src={paw.image}/>
            <span>{paw.title}</span>
        </div>;
    }
}

export default class Info extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            paw: PAWS.A
        };
    }

    render () {
        const {paw} = this.state;
        const select = paw => this.setState(({paw}));

        const elements = Object.keys(PAWS).map(key => PAWS[key]).map((paw, i) => <Paw
            key={i} paw={paw} select={select}
        />);

        return <div className="info">
            <div className="paws">
                {elements}
            </div>
            <div className="text">
                {paw.text}
            </div>
        </div>
    }
}