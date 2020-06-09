import React, { Component } from 'react';

const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

const Table = (props) => {
  return (
    <table className='dashboardTableStyling'>
      <th className='dashboardTableHeadStyling'>Today</th>
      <th className='dashboardTableHeadStyling'>is</th>
      <th className='dashboardTableHeadStyling'>the</th>
      <th className='dashboardTableHeadStyling'>day!</th>
    </table>
  )
}

const User = (props) => {
  return (
    <div>
      <p>Welcome {props.name}</p>
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
        <User user={this.props.name}/>
        <Table className='tableStyling' />
      </div>
    );
  }
}

export default DashboardPage;
