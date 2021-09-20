function SmallCircle (props) {
        return (<div
            style={{backgroundColor:props.color, borderRadius:props.figureType === "square" ? "0%" : "50%", margin:"10px"}} 
            className="kruzhok"  >
                 <button style={{width:"10%"}} onClick={props.deleteFigure} className="button-circle" >x</button>
                 <button style={{width:"60%"}} onClick={props.updateFigure} className="button-circle" >Update</button>
                 <input className="input-circle" onChange={props.updateFigureInput} type="text"/>

                 </div>) 

}
// style={{backgroundColor:"red", borderRadius:props.figureType === "square" ? "0%" : "50%", margin:"40px"}} className="small-circle"
export default SmallCircle