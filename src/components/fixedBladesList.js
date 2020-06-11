import React, { Component } from 'react';

class FixedBladesList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "Hello"
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
    this.setState({
      name: 'Goodbye'
    });
  }
    render() {
    
      return (
          <div>
            <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
              { /* change code below this line */ }
              <p>Your Fixed blades are: <strong>{this.props.fixedList}</strong></p>
              { /* change code above this line */ }
          </div>
      );
    }
  };
  
  export default FixedBladesList;