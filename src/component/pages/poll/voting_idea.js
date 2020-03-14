import React from "react";

export default class VotingIdea extends React.Component {
    render() {
        const {idea} = this.props;
        const {duration } = idea.poll;

        return <div className="idea">
            <span className="title">{idea.title}</span>
            <span>{duration} Minuten verbleiben</span>
        </div>;
    }
}
