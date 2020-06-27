import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { setCookie } from '../utils/cookies';
import { connect } from 'react-redux';
import Dropdown from '../components/dropdown';

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
          <tr><td className='border'><Dropdown /></td>
            <td className='border'><Link className='dashboardLinkStyling' to='forSale'>For Sale</Link></td>
            <td className='border'><Link className='dashboardLinkStyling' to='edcRotation'>EDC Rotation</Link></td>
            <td className='border'><Link className='dashboardLinkStyling' to='wishList'>Wish List</Link></td></tr>
        </tbody>
      </table>
    </div>
  )
}

class DashboardPage extends Component {
  state = {
    blades: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/blades?access_token=5e3600914e63efce06c8cee3')
      .then(res => res.json())
      .then((data) => {
        this.setState({ blades: data })
      })
      .catch(console.log)
  }

  onHandleLogin = (event) => {
    event.preventDefault();
  }

  UNSAFE_componentDidMount() {
    document.title = 'React Login';
  }

  render() {
    const allKnivestrue = this.state.blades.filter(i => i.allKnives == true);
    const renderAllKnives = allKnivestrue.map((i) =>

    <table className='container tableBackground showStopper'>
    <thead>
    </thead>
    <tbody>
      <tr>
        <td className='show1 shane'>{i.brand}</td>
        <td className='show1 shane'>{i.model}</td>
        <td className='show1 shane'>{i.bladeShape}</td>
        <td className='show1 shane'>{i.steel}</td>
        <td className='show1 shane'>${i.price}</td>
      </tr>
    </tbody>
  </table>
);

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
        <p className='costOfcollection'>Cost of Collection:  </p>
        <p className='costOfCollectNum'>$858.33</p>
        <Table className='tableStyling' />
        <center><h2 className='allKnivesStyling'>All Knives:</h2></center>
        <table className='container showStopper nice'>
          <tbody>
            <tr>
              <td className=''>Brand</td>
              <td className=''>Model</td>
              <td className=''>Blade Shape</td>
              <td className=''>Steel</td>
              <td className=''>Price</td>
            </tr>
          </tbody>
        </table>
        {renderAllKnives}
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });
export default connect(mapStateToProps)(DashboardPage); 
