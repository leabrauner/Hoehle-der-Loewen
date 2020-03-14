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
            <h3>Abstimmung</h3>
            <Options
                duration={duration}
                setDuration={SetVotingDuration}
            />
            <div className="panel">
                {elements}
            </div>
        </div>;
    }
}