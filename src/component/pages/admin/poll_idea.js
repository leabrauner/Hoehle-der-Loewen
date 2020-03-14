import React from "react";

export default class PollIdea extends React.Component {
    isActive (poll) {
        return !poll || (!poll.isFinished && !poll.isStarted);
    }
    render () {
        const { idea } = this.props;
        const actionName = this.isActive(idea.poll) ? 'stop' : 'start';

        return <div className="idea">
            <div className="title">{idea.title}</div>
            <button className="action">{actionName}</button>
        </div>;
    }
}