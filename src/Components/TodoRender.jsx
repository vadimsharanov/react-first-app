// import User from "./User"


function TodoRender(props) {

    return(
        <>
        <div className="data-container" >
            <h2 className='author'>{props.author}</h2>
            <span className='title'>{props.data}</span>
            <span className="data-index" >{props.index + 1}</span>
            <img className='knygos-img' src={props.img} alt={props.data} />
            <span className="status"  style={{backgroundColor:props.completed ? "greenyellow" : "greenyellow"}} >{!props.completed ? "Turime!" : "Turime!"}</span>
            <span className='price'>{props.price}€</span>
            <button onClick={props.buybook} className='buy-button'>Pirkti!</button>
        </div>
            
           
        </>
    )
}

export default TodoRender