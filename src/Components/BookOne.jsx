import { useParams } from "react-router"
import { Link } from "react-router-dom"

function BookOne(props) {
    const { bookId } = useParams()
    console.log(bookId)
    return(
        <>
        {bookId === undefined || props.data.length === 0 ? <h2 className="loader" ></h2> :   
            <div className="data-container" >
            <h2 className='author'>{props.data[bookId-1].author}</h2>
            {/* <span className='title'>{props.data[bookId].type}</span> */}
            <span className="data-index" >{Number(bookId-1) + 1}</span>
            <img className='knygos-img' src={props.data[bookId-1].img} alt="Nerastas" />
            <span className='price'>{props.data[bookId-1].price}€</span>
            {/* <button onClick={props.buybook} className='buy-button'>Pirkti!</button> */}
        </div>}
        <Link to={"/"}>
        <button>Go back!</button>
        </Link>
        
        </>
    )
}

export default BookOne