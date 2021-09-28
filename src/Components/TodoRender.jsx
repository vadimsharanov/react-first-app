import { Link } from "react-router-dom"


function TodoRender(props) {

    return(
        <>
        <Link to={"/" + props.data.id}><div className="data-container" >
            <h2 className='author'>{props.data.author}</h2>
            <span className='title'>{props.data.title}</span>
            <span className="data-index" >{props.index + 1}</span>
            <img className='knygos-img' src={props.data.img} alt={props.data} />
            <span className="status"  style={{backgroundColor:props.data.completed ? "greenyellow" : "greenyellow"}} >{!props.data.completed ? "Turime!" : "Turime!"}</span>
            <span className='price'>{props.data.price}€</span>
            <button onClick={props.buybook} className='buy-button'>Pirkti!</button>
        </div>
        </Link>

            
           
        </>
    )
}

export default TodoRender