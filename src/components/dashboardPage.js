import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { setCookie } from '../utils/cookies';
import { connect } from 'react-redux';

const CurrentDate = (props) => {
  var tempDate = new Date();
  var date = (tempDate.getMonth()+1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();
  const currDate = date;
  return (
      <div className='dateStyling'>{currDate}</div>
  );
};

// const User = (props) => {
//   return (
//     <div>
//       <p>Welcome {props.email}</p>
//     </div>
//   );
// };

const Table = () => {
  return (
    <div>
      <table className='dashboardTableStyling'>
        <tbody>
          <tr><td><Link className='dashboardLinkStyling' to='yourKnives'>Your Knives</Link></td>
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

    // let email = event.target.email.value;
    // let password = event.target.password.value;

    // const data = {
    //   email, password
    // };

    // this.props.dispatch(loginUserAction(data));
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
        <div className='column1'>
          
        <h1 className='loginPageTitle'>BladeX</h1>
        <div className='dateStyling'>
        <CurrentDate date={Date()} />
        </div>
        <h3 className='dashboardTitle'>Dashboard</h3>
        {/* <User user={this.props.email} /> */}
        </div>
        <Table className='tableStyling' />
        <div className='column2'></div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });
export default connect(mapStateToProps)(DashboardPage); 
