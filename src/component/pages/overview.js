import React from "react";

const ideas = [{
    id: 0,
    image: 'bla',
    title: 'Titel 1',
    author: 'Author 1',
    status: 'DONE',
    description: 'Description 1',
    rating: {
        overall: 3.4,
        benefit: 4.0,
        presentation: 2.9,
        implementability: 3.9
    },
    comments: [
        {
            author: 'Donald J. Trump',
            created: '02.03.2020',
            text: 'Lorem Ipsum'
        }, {
            author: 'Donald J. Trump',
            created: '02.03.2020',
            text: 'Lorem Ipsum'
        }
    ]
}, {
    id: 1,
    image: 'bla',
    title: 'Titel 2',
    author: 'Author 2',
    status: 'PENDING',
    description: 'Description 2',
    rating: {
        overall: 0.0,
        benefit: 0.0,
        presentation: 0.0,
        implementability: 0.0
    }
}, {
    id: 2,
    image: 'bla',
    title: 'Titel 3',
    author: 'Author 3',
    status: 'LOCKED',
    description: 'Description 3',
    rating: {},
    comments: []
}];


class Idea extends React.Component {
    render () {
        const idea = this.props.idea;

        return <div className="idea">
            <img src={idea.image} />
            <div className="info">
                <div className="title">{idea.title}</div>
                <div className="author">{idea.author}</div>
                <div className="description">{idea.description}</div>
            </div>




        </div>;
    }
}

export default class Overview extends React.Component{
    render() {
        const elements = ideas.map(idea => {
            return <Idea idea={idea} key={idea.id} />;
        });

        return <div className="overview">
            <h3>Ideen- / Projektübersicht</h3>
            {elements}
        </div>;
    }
}