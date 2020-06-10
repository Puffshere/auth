import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { setCookie } from '../utils/cookies';
import { connect } from 'react-redux';
import { loginUserAction } from '../actions/authenticationActions';

const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

const Table = () => {
  return (
    <table className='dashboardTableStyling'>
      <th className='dashboardTableHeadStyling'><Link className='dashboardLinkStyling' to='yourKnives'>Your Knives</Link></th>
      <th className='dashboardTableHeadStyling'><Link className='dashboardLinkStyling' to='forsale'>For Sale</Link></th>
      <th className='dashboardTableHeadStyling'>EDC Rotation</th>
      <th className='dashboardTableHeadStyling'>Wish List</th> 
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
  onHandleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email, password
    };

    this.props.dispatch(loginUserAction(data));
  }

  componentDidMount() {
    document.title = 'React Login';
  }


  render() {
    let isSuccess, message;

    if (this.props.response.login.hasOwnProperty('response')) {
      isSuccess = this.props.response.login.response.success;
      message = this.props.response.login.response.message;
      
      if (isSuccess) {
        setCookie('token', this.props.response.login.response.token, 1);
      }
    }
  

    return (
      <div className='dashboard'>
         {!isSuccess ? <div></div> : <Redirect to='dashboard' />}
        <h1 className='loginPageTitle'>BladeX</h1>
        <h3 className='dashboardTitle'>Dashboard</h3>
        <CurrentDate date={Date()}/>
        <User user={this.props.name}/>
        <Table className='tableStyling' />
      </div>
    );
  }
}

const mapStateToProps = (response) => ({response});
export default connect(mapStateToProps)(DashboardPage); 
