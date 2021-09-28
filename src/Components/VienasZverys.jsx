import { useParams } from "react-router-dom"
import { zverys as list } from "../Data/zverys.js"



function VienasZverys(props) {
    
    const {id} = useParams() 
    return (
        <h1 style={{fontSize:'123px'}}  >{list[id-1].name}</h1>
    )   
}

export default VienasZverys