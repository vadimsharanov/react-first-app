
function Post(props) {

    return (
        <div className="todo">
            <div className="id" > {props.data.id}  </div>
            <div className="title"> {props.data.title}  </div>
            <div className="body" > data.body </div>
        </div>
    );
}


export default Post;