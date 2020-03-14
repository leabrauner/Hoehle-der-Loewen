import React from "react";
import Rating from "./rating";
import Comments from "./comments";

export default class Idea extends React.Component {
    render () {
        const idea = this.props.idea;

        return <div className="idea">
            <div className="details">
                <div className="image">
                    <img src={idea.image} />
                </div>
                <div className="info">
                    <div className="title">{idea.title}</div>
                    <div className="author">{idea.author}</div>
                    <div className="description">{idea.description}</div>
                </div>
            </div>
            <Rating poll={idea.poll} />
            <Comments poll={idea.poll} />
        </div>;
    }
}