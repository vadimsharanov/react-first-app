function SmallCircle (props) {
        return (<div
             style={{backgroundColor:props.color, borderRadius:props.figureType === "square" ? "0%" : "50%", margin:"40px"}} className="small-circle">
                 
                 <button onClick={props.delete} className="delete-button" >x</button>
                 <button onClick={props.update}   >Update</button>
                 <input onChange={props.updateInput} type="text"/>

                 </div>) 

}
export default SmallCircle