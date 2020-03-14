import React from "react";
import Idea from "./idea";

export default class Overview extends React.Component{
    render() {
        const elements = this.props.ideas.map(idea => <Idea
            key={idea.id} idea={idea}
        />);

        return <div className="overview">
            <h3>Ideen- / Projektübersicht</h3>
            <div className="panel">
                <select>
                    <option>Nutzen</option>
                    <option>Umsetzbarkeit</option>
                    <option>Gesamtbewertung</option>
                </select>
            </div>
            <div className="panel">
                {elements}
            </div>
        </div>;
    }
}