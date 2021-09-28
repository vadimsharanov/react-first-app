import { Link } from "react-router-dom"

function VienasZverysLink(props) {
    return (
        <li>
            {/*   */}
            <Link to={"" + props.data.id} >{props.data.name}</Link>
        </li>
    )   
}

export default VienasZverysLink