import React from 'react';
import RatoVirve from './RatoVirve.jsx';





class Ratas extends React.Component {
    constructor() {
        super()
        this.state = {color:"yellow"}

    }
    changeColor = (yooo) => {
        // console.log("cho");
        // e.preventDefault()
        // e.stopPropagation()
        // document.getElementById("krug").style.backgroundColor = "red"
        this.setState((state) => {
            let bgColor = "";
            if (yooo === 1) {
                bgColor = "red"
            }
            if (yooo === 2) {
                bgColor = "black"
            }
            if (yooo === 3) {
                bgColor = "orange"
            }
            // if (state.color === 'yellow') {
            //     bgColor = "red"
            // }
            // else {
            //     bgColor = "yellow"
            // }
            return(
             {color: bgColor}
         )
        })
    } 

    
    componentDidMount() {
    }
    
    render() { 
        return (
            <>
            <div className="greenCircle" id="krug"  style={{backgroundColor:this.state.color}} >
            <button id="baton"  className="circle-button" onClick={ () =>  this.changeColor(1)} >
               Raudona
            </button>
            <button id="baton"  className="circle-button" onClick={ () =>  this.changeColor(2)} >
               Juoda
            </button>
            <button id="baton"  className="circle-button" onClick={ () =>  this.changeColor(3)} >
               Oranzine
            </button>
            </div>
            </>
        )
}
}

export default Ratas