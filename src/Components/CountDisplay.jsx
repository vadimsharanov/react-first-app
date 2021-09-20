import React from 'react';

class CountDisplay extends React.Component {
    render() { 
        console.log(this.props.digit)
    
        return (
        <>
        <div className="nice-digit">
            {this.props.digit}X
        </div>
        </>
)}
        }
export default CountDisplay
    