import React from 'react';
import CountDisplay from './CountDisplay.jsx';
import Mygtukas2 from './Mygtukas2.jsx';





class Mygtukas extends React.Component {
    constructor() {
        super()
        this.state = {counter:0}

    }
    activateLasers = (e) => {
        console.log("cho");
        e.preventDefault()
        e.stopPropagation()
        this.setState(((state, props) => ({counter: state.counter + props.amount})
        ))}

    valio = (e) => {
        console.log("valio", this.props.tekstas);
    }
    
    // componentDidMount() {}

    // componentWillUnmount() {clearInterval(this.timerID); }
    
    render() { 
        return (
            <>
            <div className="bin" onClick={(e) => this.valio(e)} >
                <a href="">

        <button className="baton" id="baton" onClick={ (e) =>  this.activateLasers(e)} >
           {this.props.tekstas}
        </button>
                </a>
                <CountDisplay digit={this.state.counter}>
                </CountDisplay>
                <Mygtukas2 virve={this.activateLasers} ></Mygtukas2>
            </div>
            </>
        )
}
}

export default Mygtukas