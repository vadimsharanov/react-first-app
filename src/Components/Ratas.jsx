import React from 'react';
import RatoVirve from './RatoVirve.jsx';




class Ratas extends React.Component {
    constructor() {
        super()
        this.state = 
        {bg:"",
        in: "",
        size: 600,
        sizeChange:0,
        checkBox: true,
        figureType: "50%"

    }

    }

    inputChange = (e) => {
        this.setState({in: e.target.value});
        // console.log(e.target.value);
    }

    doColor = () => {
        this.setState(((state) => ({bg: state.in})
        ))}

    inputChange2 = (e) => {
        this.setState({sizeChange: e.target.value});
        // console.log(e.target.value);
    }
    
    doSize = () => {
        this.setState(((state) => ({size: state.sizeChange})
        ))
    }
    doCheck = (e) => {
        this.setState(((state) => ({
            checkBox: !state.checkBox
        })
        ))
    }

    
    

    render() { 
        return (
            <>
            <div className="greenCircle" id="krug"  
            style={{backgroundColor:this.state.bg, width:this.state.size + "px", height:this.state.size+"px", borderRadius:this.state.checkBox? "50%" : "0%",
            
            }} >
            
            <input  value={this.state.in} onChange={this.inputChange}  type="text" />
            <button className="color-button-nd" onClick={this.doColor} >Color Change</button>
            <input  value={this.state.sizeChange} onChange={this.inputChange2}  type="number" />
            <button className="color-button-nd" onClick={this.doSize} >Color Change</button>
            <input style={{width:100 + "px", height:100 + "px"}} onClick={this.doCheck} type="checkbox" name="" id="" />
            {/* <input  value={this.state.in} onChange={this.inputChange}  type="text" />
            <button className="color-button-nd"  >Color Change</button> */}

            {/* {data.map( (spalva, i, styliokas) => <RatoVirve style={`${styliokas}`}  kluch={i+1} key={i} color={`${spalva}`} clickToChangeColor={this.changeColor}  ></RatoVirve>)} */}
            {/* <RatoVirve clickToChangeColor={this.changeColor}></RatoVirve> */}
            {/* <input  value={this.state.in} onChange={this.inputChange}  type="text" />
            <button className="color-button" onClick={this.doColor} >Color Change</button> */}
            </div>
            </>
        )
}
}

export default Ratas