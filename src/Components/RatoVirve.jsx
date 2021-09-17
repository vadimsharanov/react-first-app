import React from 'react';
import Reg from './Reg';
// import CountDisplay from './CountDisplay.jsx';



// function App(props) {
//     return (
//         <>
//          {data.map( (bebras, i) => <Kvadratas key={i} bebras={`${bebras}`} ></Kvadratas>)}
//         </>



class RatoVirve extends React.Component {




    render() { 
        return (
            <>
               

        <button className="circle-button" onClick={() => this.props.clickToChangeColor(this.props.color )} style={{backgroundColor:this.props.color}} >
           {this.props.color}
           <Reg kluch={this.props.kluch} ></Reg>
        </button>
    
            </>
        )
}
}

export default RatoVirve