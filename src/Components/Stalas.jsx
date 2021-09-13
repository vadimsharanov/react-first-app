import Component from "./Component.js"
import React from 'react';

class Stalas extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
      return (
    <Component name={"hueta"} lastName={"huetovi4"} per={this.props.per}></Component>
      );
    }
  }
  export default Stalas