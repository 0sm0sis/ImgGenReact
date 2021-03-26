const data = [
    { id: 1, author: 'The', text: 'Hello ReactJS.NET World!' },
    { id: 2, author: 'Dude', text: 'This is one comment' },
    { id: 3, author: 'Abides', text: 'This is *another* comment' },
];

class CommentBox extends React.Component {
    render() {
        return (
            <div className="commentBox"><h1>Comments</h1>
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>

        );
    }
}

class CommentList extends React.Component {
    render() {
        const commentNodes = this.props.data.map(comment => (
            <Comment author={comment.author} key={comment.id}>
                {comment.text}
            </Comment>
        ));
        return <div className="commentList">{commentNodes}</div>;
    }
}

class CommentForm extends React.Component {
    render() {
        return (
            <div className="commentForm">Hello, world! I am a CommentForm.</div>
        );
    }
}
function createRemarkable() {
    var remarkable =
        'undefined' != typeof global && global.Remarkable
            ? global.Remarkable
            : window.Remarkable;

    return new remarkable();
}

class Comment extends React.Component {
    rawMarkup() {
        const md = new Remarkable();
        const rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    }
    render() {
        const md = createRemarkable();
        return (
            <div className="comment">
                <h2 className="commentAuthor">{this.props.author}</h2>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render(<CommentBox data={data} />, document.getElementById('content'));