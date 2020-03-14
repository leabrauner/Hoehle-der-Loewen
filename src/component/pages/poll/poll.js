import React from "react";
import VotingIdea from "./voting_idea";

export default class Poll extends React.Component {
    render() {
        const elements = this.props.ideas
            .filter(idea => idea.poll && idea.poll.isStarted)
            .map(idea => <VotingIdea idea={idea} key={idea.id} />);

        let placeholder = <noscript />;

        if (elements.length === 0) {
            placeholder = <div>Aktuell läuft keine Abstimmung</div>;
        }

        return <div className="poll">
            <div className="panel">
                <h3>Abstimmung</h3>
                <div className="panel">
                    {elements}
                    {placeholder}
                </div>
            </div>
        </div>;
    }
}
