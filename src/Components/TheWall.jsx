import { useParams} from "react-router-dom"

function TheWall(props) {

    const { theWall } = useParams() 

    return (
        <h1>this is a wall yopta {theWall} </h1>
    )
}

export default TheWall;