// import React from 'react';
import React, { useState, useEffect } from 'react';
import SmallCircle from './SmallCircle.jsx';

function App() {
const [figures,add] = useState([])
const [figureInput,figureInputValue] = useState("");
const [type, figureType] = useState("")
const [updateInput, updateInputValue] = useState("")


const getId = () => {
        return figures === null? 0 : figures.length

}
     
const addFigure = (tipas) => {
    const circle = {
        id: getId() + 1,
        color:figureInput,
        type: tipas
}
    const rezerv = figures.slice()
    const addPush = rezerv.push(circle)
    add(rezerv)
}
console.log(figures);


    const circleInputHandler = (e) => {
    figureInputValue(e.target.value)
    } 

    const  updateFigureHandler = (e) => {
       updateInputValue(e.target.value)
    }


const deleteFigure = (e) => {
    e = parseInt(e)
    const rezerv = figures.slice();
    console.log(rezerv);
    let figure = rezerv.find(item => e === item.id);
    rezerv.splice(rezerv.indexOf(figure),1)
    add(rezerv)
}

const updateFigure = (e) => {
    const rezerv = figures.slice();
    let figure = figures.find(item => e === item.id)
    figure.color = updateInput
    add(rezerv)
}

//  const updateFigure = (e) => {
//     const rezerv = figures.slice()
//     let figure = figures.find(item => e === item.ID);
//     figure.color = this.state.updateInput
//     this.setState({figures:circles});
//     localStorage.setItem("allFigures", JSON.stringify(circles))
// }



    // const circle = {ID: this.getId() + 1, color:this.state.figureInput, figureType: figure}
    //     const circles = this.state.figures.slice()
    //     circles.push(circle)
    //     this.setState({figures:circles});
    //     localStorage.setItem("allFigures", JSON.stringify(circles))

    // constructor() {
    //     super()
    //     this.state = 
    //     {figures: [],
    //     figureInput:'',
    //     figureType: "",
    //     updateInput: "",
    
    // }

    // }


    return (
        <>
        <button  className="baton" style={{borderRadius:"50%"}} onClick={() => addFigure("circle")} >Add circle!</button>
        <button  className="baton" style={{borderRadius:"0%"}} onClick={() => addFigure("square")} >Add square!</button>
 
        <input   onChange={circleInputHandler}  type="text" />
        <div className="container">
    {figures.map( (figure,i) =>  <SmallCircle  
    key={i} 
    deleteFigure={() => deleteFigure(figure.id)} 
    updateFigureInput={updateFigureHandler}
    updateFigure={()=> updateFigure(figure.id)}
    color={figure.color} 
    figureType={figure.type} >{figure}</SmallCircle> )}

        </div>
        
        </>
    )
    // return (
    //     <>    
    // <button onClick={addFigure}>click me</button>
    //  <button onClick={""}>Square</button>
    // <button onClick={""}>Circle</button> 
    // <input   onChange={circleInputHandler}  type="text" />
    // {figures[0]}
    // {figures.map( (circle, i) => 
    //     <SmallCircle 
    //     key={i} 
    //     // color={circle.color}
       
    // //     delete={() => this.deleteFigure(circle.ID)}
    // //     id={circle.ID} figureType={circle.figureType}
    // //     update={() => this.updateFigure(circle.ID)}
    // //     updateInput={this.updateInputHandler}
    //       ></SmallCircle>)}
    //     </>
    // )





    // updateInputHandler = (e) => {
    //     this.setState({updateInput:e.target.value})
    // }
    

}
export default App


// rezervas*****
//
    // getId = () => {
    //     const oneCircle = JSON.parse(localStorage.getItem("allFigures"))
    //     return oneCircle === null? 0 : oneCircle.length
        
    // }
        // componentDidMount() {
    //     const circle = JSON.parse(localStorage.getItem("allFigures"))
    //     if (circle === null) {
    //         return ;
    //     }
    //     this.setState({
    //         figures: circle
    //     })
    // }
    // deleteFigure = (e) => {
    //     const circles = this.state.figures.slice()
    //     let figure = circles.find(item => e === item.ID);
    //     circles.splice(circles.indexOf(figure),1);
    //     this.setState({figures:circles});
    //     localStorage.setItem("allFigures", JSON.stringify(circles))
    // }

    // updateFigure = (e) => {
    //     const circles = this.state.figures.slice()
    //     let figure = circles.find(item => e === item.ID);
    //     figure.color = this.state.updateInput
    //     this.setState({figures:circles});
    //     localStorage.setItem("allFigures", JSON.stringify(circles))
    // }
    // return (
    //     <>     
    //     <div>
    //     {this.state.figures.map( (circle, i) => 
    //     <SmallCircle 
    //     key={i} 
    //     color={circle.color}
    //     delete={() => this.deleteFigure(circle.ID)}
    //     id={circle.ID} figureType={circle.figureType}
    //     update={() => this.updateFigure(circle.ID)}
    //     updateInput={this.updateInputHandler}
    //       ></SmallCircle>)}
    //     <input   onChange={this.circleInputHandler}  type="text" />
    //     <button className="color-button-nd" onClick={() => this.addFigure("circle")} >{x}</button>
    //     </div>
    //     </>
    // )

    // {this.state.figures.map( (circle, i) => 
    //     <SmallCircle 
    //     key={i} 
    //     color={circle.color}
    //     delete={() => this.deleteFigure(circle.ID)}
    //     id={circle.ID} figureType={circle.figureType}
    //     update={() => this.updateFigure(circle.ID)}
    //     updateInput={this.updateInputHandler}
    //       ></SmallCircle>)}
    //     <input   onChange={this.circleInputHandler}  type="text" />
    //     <button className="color-button-nd" onClick={() => this.addFigure("circle")} >{x}</button>

        // addFigure = (figure) => {
    //     const circle = {ID: this.getId() + 1, color:this.state.figureInput, figureType: figure}
    //     const circles = this.state.figures.slice()
    //     circles.push(circle)
    //     this.setState({figures:circles});
    //     localStorage.setItem("allFigures", JSON.stringify(circles))

    // }