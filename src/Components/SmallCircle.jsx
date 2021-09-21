function SmallCircle (props) {
        return (<div
            style={{backgroundColor:props.color, borderRadius:props.figureType === "square" ? "0%" : "50%", margin:"30px"}} 
            className="kruzhok"  >
                 <button style={{width:"13%",height:"35px"}} onClick={props.deleteFigure} className="button-circle" >X</button>
                 <button style={{width:"60%"}} onClick={props.updateFigure} className="button-circle" >Update</button>
                 <input className="input-circle" onChange={props.updateFigureInput} type="text"/>
                 <button onClick={props.changeTeam} >Change Team</button>

                 </div>) 

}
// style={{backgroundColor:"red", borderRadius:props.figureType === "square" ? "0%" : "50%", margin:"40px"}} className="small-circle"
export default SmallCircle