import React, { Component } from 'react';

class FixedBladesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
    }
  };
}

  export default FixedBladesList;