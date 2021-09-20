// import React from 'react';
// import CountDisplay from './CountDisplay.jsx';
// // import Mygtukas2 from './Mygtukas2.jsx';





// class Mygtukas extends React.Component {
//     constructor() {
//         super()
//         this.state = {x:0}
//     }
//     set3X = () => {
//         return x+3
//     }
//     // const [x,setCount] = useState(3);
//     // const x = 3;
//     // const set3X = set3X
//     activateLasers = (e) => {
//         // console.log("cho");
//         // e.preventDefault()
//         // e.stopPropagation()
//         console.log(this.state.x);
//         this.setState(((state, props) => ({x: state.x += 3})
//         ))
//         localStorage.setItem("paspaudimas", (this.state.x + 3))
      
//     }
//     componentDidMount() {
//         console.log(this.state.x);
//         const duomenys = JSON.parse(localStorage.getItem("paspaudimas"))
//         // if (duomenys === null) {
//         //     return ;
//         // }
//         this.setState(((state, props) => ({x: duomenys+3})
//         ))

//     }

    
//     render() { 
//         return (
//             <>
//         <button className="baton" id="baton" onClick={this.activateLasers} >
//            {this.props.tekstas} 
//         </button>      
//         <div>
//         {this.state.x}    
//         </div>          
            
//                  </>
//         )
// }
// }

// export default Mygtukas