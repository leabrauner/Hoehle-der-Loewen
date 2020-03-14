import React from "react";
import Options from "./options";
import PollIdea from "./poll_idea";

import {SetVotingDuration} from "../../../actions";

export default class Admin extends React.Component {
    render() {
        const {duration, ideas} = this.props;
        const elements = ideas.map(idea => <PollIdea
            idea={idea} key={idea.id}
        />);

        return <div className="admin">
            <div className="panel">
                <h3>Abstimmung</h3>
                <Options
                    duration={duration}
                    setDuration={SetVotingDuration}
                />
            </div>
            <div className="panel">
                {elements}
            </div>
        </div>;
    }
}