import React from "react";
import Row from "../../common/row";
import Accordion from "../../common/accordion";

export default class Rating extends React.Component {
    render() {
        const {poll} = this.props;

        if (!poll) {
            return <noscript/>;
        }

        return <Accordion title="Bewertungen">
            <Row label="Gesamt">
                <span>{poll.rating.overall}</span>
            </Row>
            <Row label="Vortrag">
                <span>{poll.rating.presentation}</span>
            </Row>
            <Row label="Umsetzbarkeit">
                <span>{poll.rating.implementability}</span>
            </Row>
            <Row label="Nutzen">
                <span>{poll.rating.benefit}</span>
            </Row>
        </Accordion>;
    }
}
