import React from "react";
import {DURATION} from "../../constants";
import {SetVotingDuration} from "../../actions";

class Options extends React.Component {
    render() {
        const {setDuration, duration} = this.props;

        const options = Object.keys(DURATION).map(key => DURATION[key]).map(value => {
            return <option key={value} onChange={() => setDuration(value)}>{value}</option>;
        });

        return <div className="options">
            <select selected={duration}>
                {options}
            </select>
            <span>minutes</span>
        </div>;
    }
}

class PollIdea extends React.Component {
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

export default class Admin extends React.Component {
    render() {
        const {duration, ideas} = this.props;
        const elements = ideas.map(idea => <PollIdea idea={idea} key={idea.id} />);

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