import React, { } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ForSaleKnives from './forSaleKnives';
import Dropdown from '../components/dropDown';

const CurrentDate = (props) => {
  var tempDate = new Date();
  var date = (tempDate.getMonth() + 1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();
  const currDate = date;
  return (
    <div>
      <p className='dateStyling'>{currDate}</p>
    </div>
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

class ForSalePage extends React.Component {
  state = {
    knives: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/knives?access_token=5e3600914e63efce06c8cee3')
      .then(res => res.json())
      .then((data) => {
        this.setState({ knives: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className='dashboard'>
        <SignOut />
        <div className='column1'>
          <h1 className='loginPageTitle'>BladeX</h1>
          <div className='dateStyling'>
            <CurrentDate date={Date()} />
          </div>
          <h3 className='dashboardTitle1'>ForSale</h3>
        </div>
        <p className='costOfcollection1'>Amount for Sale:  </p>
        <p className='costOfCollectNum'>$239.95</p>
        <Table className='tableStyling' />
        <ForSaleKnives knives={this.state.knives} />
      </div>
    );
  }
};

export default ForSalePage;
