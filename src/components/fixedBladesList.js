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
      name: 'These are your fixed blade knives'
    });
  }
  render() {

    return (
      <div className='tableStyling'>
        <button onClick={this.handleClick}>Click Me</button>
        <h3>{this.state.name}</h3>
        
          { /* change code below this line */}
          <p>Your Fixed blades are: <strong>{this.props.fixedList}</strong></p>
          { /* change code above this line */}
        
      </div>
    );
  }
};

export default FixedBladesList;