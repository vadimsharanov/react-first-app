import Bebras from "./Bebras.jsx";


function Kvadratas(props) {
    if (props.bebras === "Alkogolikas") {
        return (
            <div className="kvadratas br" >
               <b><Bebras bebras={props.bebras} /></b>
            </div>
            )
    }
    return (
        <div className="kvadratas" >
            <Bebras bebras={props.bebras} />
        </div>
)
}

export default Kvadratas