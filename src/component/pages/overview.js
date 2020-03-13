import React from "react";

class Rating extends React.Component {
    render () {
        return <div className="rating">
            <div>Bewertung</div>
        </div>;
    }
}

class Comments extends React.Component {
    render () {
        return <div className="comments">
            <div>Kommentare</div>
        </div>;
    }
}

class Idea extends React.Component {
    render () {
        const idea = this.props.idea;

        return <div className="idea">
            <img src={idea.image} />
            <div className="info">
                <div className="title">{idea.title}</div>
                <div className="author">{idea.author}</div>
                <div className="description">{idea.description}</div>
                <Rating />
                <Comments />
            </div>
        </div>;
    }
}

export default class Overview extends React.Component{
    render() {
        console.log(this.props.ideas)
        const elements = this.props.ideas.map(idea => {
            return <Idea idea={idea} key={idea.id} />;
        });

        return <div className="overview">
            <h3>Ideen- / Projektübersicht</h3>
            {elements}
        </div>;
    }
}