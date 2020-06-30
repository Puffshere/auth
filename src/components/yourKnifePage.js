import React, { } from 'react';
import KnifeModal from '../components/knifeModal';
import { Link } from 'react-router-dom';
import Dropdown from '../components/dropDown';

const CurrentDate = (props) => {
    var tempDate = new Date();
    var date = (tempDate.getMonth() + 1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();
    const currDate = date;
    return (
        <div>
            <p>{currDate}</p>
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
              <td className='border'><Link className='dashboardLinkStyling' to='wishList'>Wish List</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

class YourKnifePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='dashboard'>
                <SignOut />
                <div className='column1'>
                    <h1 className='yourKnifePageTitle'>BladeX</h1>
                    <div className='dateStyling'>
                        <CurrentDate date={Date()} />
                    </div>
                    <h3 className='dashboardTitle hat'>YourKnives</h3>
                </div>
                <Table className='tableStyling' />
                <KnifeModal />
                <br></br>
            </div>
        );
    }
}

export default YourKnifePage;
