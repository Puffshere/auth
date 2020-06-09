import React, { Component } from 'react';

const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class DashboardPage extends Component {
  render() {
    return (
      <div className='dashboard'>
        <h1 className='loginPageTitle'>BladeX</h1>
        <h3 className='dashboardTitle'>Dashboard</h3>
        <CurrentDate date={Date()}/>
      </div>
    );
  }
}

export default DashboardPage;
