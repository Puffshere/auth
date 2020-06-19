import React, { } from 'react';

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
          <button className='dashboardLinkStyling' onClick={this.toggleVisibility}>Fixed Blades</button>
          <p>Your Fixed blades are: <strong>{this.props.fixedList}</strong></p>
        </div>
      );
    } else {
      return (
        <div>
          <button className='dashboardLinkStyling' onClick={this.toggleVisibility}>Fixed Blades</button>
        </div>
      );
    }
  };
}

export default FixedBladesList;
