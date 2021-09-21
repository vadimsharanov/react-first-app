function TodoRender(props) {


    return(
        <>
            <div className="data-container" >
            Title:  {props.data}
            <span className="data-index" >{props.id}</span>
            </div>
           
        </>
    )
}

export default TodoRender