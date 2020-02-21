import React from "react";

const ideas = [{
    id: 0,
    image: 'bla',
    title: 'Titel 1',
    author: 'Author 1',
    description: 'Description 1'
}, {
    id: 1,
    image: 'bla',
    title: 'Titel 2',
    author: 'Author 2',
    description: 'Description 2'
}, {
    id: 2,
    image: 'bla',
    title: 'Titel 3',
    author: 'Author 3',
    description: 'Description 3'
}];


class Idea extends React.Component {
    render () {
        const idea = this.props.idea;

        return <div className="idea">
            <img src={idea.image} />
            <div className="title">{idea.title}</div>
            <div className="author">{idea.author}</div>
            <div className="description">{idea.description}</div>
        </div>;
    }
}

export default class Overview extends React.Component{
    render() {
        const elements = ideas.map(idea => {
            return <Idea idea={idea} key={idea.id} />;
        });

        return <div className="overview">
            <h2>Ideen- / Projektübersicht</h2>
            {elements}
        </div>;
    }
}