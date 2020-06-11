import React, { Component } from 'react';

class FixedBladesList extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* change code below this line */ }
              <p>Your Fixed blades are: <strong>{this.props.fixedList}</strong></p>
              { /* change code above this line */ }
          </div>
      );
    }
  };
  
  export default FixedBladesList;