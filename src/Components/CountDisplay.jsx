import React from 'react';

class CountDisplay extends React.Component {
    render() { 
        if (this.props.digit > 30) {
            return (
            <>
            <div className="nice-digit green">
                {this.props.digit}
            </div>
            </>

            )
        }
        return (
            <>
            <div className="nice-digit">
                {this.props.digit}
            </div>
            </>
)}}
export default CountDisplay
    