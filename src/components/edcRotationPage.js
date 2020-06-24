import React, { Component } from 'react';

const CurrentDate = (props) => {
  var tempDate = new Date();
  var date = (tempDate.getMonth() + 1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();
  const currDate = date;
  return (
    <div>
      <p>The current date is: {currDate}</p>
    </div>
  );
};

class EDCRotationPage extends Component {
  render(
  ) {

    return (
      <div className='dashboard'>

        <h1 className='loginPageTitle'>BladeX</h1>
        <h3 className='dashboardTitle'>EDC Rotation</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
}

export default EDCRotationPage;
