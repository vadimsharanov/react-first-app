import React from 'react';



class Bebras extends React.Component {
    constructor() {
        super()
        this.state = {date: new Date()};
    }
    componentDidMount() {this.timerID = setInterval(() => this.tick(),1000);}

    componentWillUnmount() {clearInterval(this.timerID); }

    tick() {this.setState({ date: new Date()})}
    
    render() {
        return (
                <span>
                    {this.props.bebras}
                    <hr/>
                    {this.state.date.toLocaleTimeString()}
                </span>
)
}
}

export default Bebras