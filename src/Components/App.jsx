import React from 'react';
import SmallCircle from './SmallCircle.jsx';





class App extends React.Component {
    constructor() {
        super()
        this.state = 
        {figures: [],
        figureInput:'',
        figureType: "",
        updateInput: "",
    
    }

    }

    getId = () => {
        const oneCircle = JSON.parse(localStorage.getItem("allFigures"))
        return oneCircle === null? 0 : oneCircle.length
        
    }

    addFigure = (figure) => {
        const circle = {ID: this.getId() + 1, color:this.state.figureInput, figureType: figure}
        const circles = this.state.figures.slice()
        circles.push(circle)
        this.setState({figures:circles});
        localStorage.setItem("allFigures", JSON.stringify(circles))

    }

    deleteFigure = (e) => {
        const circles = this.state.figures.slice()
        let figure = circles.find(item => e === item.ID);
        circles.splice(circles.indexOf(figure),1);
        this.setState({figures:circles});
        localStorage.setItem("allFigures", JSON.stringify(circles))
    }

    updateFigure = (e) => {
        const circles = this.state.figures.slice()
        let figure = circles.find(item => e === item.ID);
        figure.color = this.state.updateInput
        this.setState({figures:circles});
        localStorage.setItem("allFigures", JSON.stringify(circles))
    }
  

    circleInputHandler = (e) => {
        this.setState({figureInput: e.target.value});
        }
    updateInputHandler = (e) => {
        this.setState({updateInput:e.target.value})
    }

    componentDidMount() {
        const circle = JSON.parse(localStorage.getItem("allFigures"))
        if (circle === null) {
            return ;
        }
        this.setState({
            figures: circle
        })
    }

    render() { 
        return (
            <>     
            <div>
            {this.state.figures.map( (circle, i) => 
            <SmallCircle 
            key={i} 
            color={circle.color}
            delete={() => this.deleteFigure(circle.ID)}
            id={circle.ID} figureType={circle.figureType}
            update={() => this.updateFigure(circle.ID)}
            updateInput={this.updateInputHandler}
              ></SmallCircle>)}
            <input   onChange={this.circleInputHandler}  type="text" />
            <button className="color-button-nd" onClick={() => this.addFigure("circle")} >Add circle</button>
            <button className="color-button-nd" onClick={() => this.addFigure("square")} >Add square</button>
            </div>
            </>
        )
}
}

export default App
