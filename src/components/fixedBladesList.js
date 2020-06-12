import React, { Component } from 'react';

class FixedBladesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hello",
      visibility: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  handleClick() {
    this.setState({
      name: 'These are your fixed blade knives'
    });
  }

  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <a className='dashboardLinkStyling' onClick={this.toggleVisibility}>Fixed Blades</a>
          <p>Your Fixed blades are: <strong>{this.props.fixedList}</strong></p>
        </div>
      );
    } else {
      return (
        <div>
          <a className='dashboardLinkStyling' onClick={this.toggleVisibility}>Fixed Blades</a>
        </div>
      );

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
}

  export default FixedBladesList;