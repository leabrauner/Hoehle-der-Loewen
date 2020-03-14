import React from "react";
import Accordion from "../../common/accordion";

class Comment extends React.Component {
    render () {
        const {comment} = this.props;

        return <div className="comment">
            <div className="header">
                <span className="author">{comment.author}</span>
                <span className="created">{comment.created}</span>
            </div>
            <div className="text">
                {comment.text}
            </div>
        </div>;
    }
}

export default class Comments extends React.Component {
    render () {
        const { poll } = this.props;

        if (!poll) {
            return <noscript/>;
        }

        const elements = poll.comments.map((comment, i) => <Comment
            key={i} comment={comment}
        />);

        return <Accordion title="Kommentare">
            {elements}
        </Accordion>;
    }
}