import React from "react";

class VotingIdea extends React.Component {
    render() {
        const {idea} = this.props;
        const {duration } = idea.poll;

        return <div className="idea">
            <span className="title">{idea.title}</span>
            <span>{duration} Minuten verbleiben</span>
        </div>;
    }
}

export default class Poll extends React.Component {
    render() {
        const ideas = this.props.ideas
            .filter(idea => idea.poll && idea.poll.isStarted)
            .map(idea => <VotingIdea idea={idea} key={idea.id} />);

        let placeholder = <noscript />;

        if (ideas.length === 0) {
            placeholder = <div>Aktuell läuft keine Abstimmung</div>;
        }

        return <div className="poll">
            <div className="panel">
                <h3>Abstimmung</h3>
                <div className="panel">
                    {ideas}
                    {placeholder}
                </div>
            </div>
        </div>;
    }
}
