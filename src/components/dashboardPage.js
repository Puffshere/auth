import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { setCookie } from '../utils/cookies';
import { connect } from 'react-redux';
import Dropdown from '../components/dropDown';
import GetMockData from '../components/getMockData';

const CurrentDate = (props) => {
  var tempDate = new Date();
  var date = (tempDate.getMonth() + 1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();
  const currDate = date;
  return (
    <div className='dateStyling'>{currDate}</div>
  );
};

const SignOut = (props) => {
  return (
    <Link to='login' className='signOutStyling'>
      Sign Out
    </Link>
  )
}

const Table = () => {
  return (
    <div>
      <table className='dashboardTableStyling'>
        <tbody>
          <tr><td><Dropdown /></td>
            <td><Link className='dashboardLinkStyling' to='forSale'>For Sale</Link></td>
            <td><Link className='dashboardLinkStyling' to='edcRotation'>EDC Rotation</Link></td>
            <td><Link className='dashboardLinkStyling' to='wishList'>Wish List</Link></td></tr>
        </tbody>
      </table>
    </div>
  )
}

class DashboardPage extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();
  }

  UNSAFE_componentDidMount() {
    document.title = 'React Login';
  }

  render() {
    let isSuccess;
    let message;

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
        <SignOut />
        <div className='column1'>
          <h1 className='loginPageTitle'>BladeX</h1>
          <div className='dateStyling'>
            <CurrentDate date={Date()} />
          </div>
          <h3 className='dashboardTitle'>Dashboard</h3>
        </div>
        <Table className='tableStyling' />
        <GetMockData />
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });
export default connect(mapStateToProps)(DashboardPage); 
