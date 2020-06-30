import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { setCookie } from '../utils/cookies';
import { connect } from 'react-redux';
import Dropdown from '../components/dropDown';

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
            <td className='border'><Link className='dashboardLinkStyling' to='wishList'>Wish List</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

class DashboardPage extends Component {
  state = {
    blades: [],
    checkbox: false,
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
    const allKnivestrue = this.state.blades.filter(i => i.allKnives === true);
    const renderAllKnives = allKnivestrue.map((i) =>

      <table className='container tableBackground showStopper'>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td className='show3'>{i.id}</td>
            <td className='show1 shane'>{i.brand}</td>
            <td className='show1 shane'>{i.model}</td>
            {/* <td className='show1 shane'>{i.bladeShape}</td> */}
            <td className='show1 shane'>{i.steel}</td>
            <td className='show1 shane'>${i.price}</td>

            <td className='show2 shane forSaleMargins'>
              <checkbox>
                <div class="checkbox-example checkMargins">
                  <input type="checkbox" value="1" id="checkboxOneInput" />
                  <label for="checkboxOneInput"></label>
                </div>
              </checkbox>


              {i.forSale}
            </td>


          </tr>
        </tbody>
      </table>
    );

    let isSuccess;

    if (this.props.response.login.hasOwnProperty('response')) {
      isSuccess = this.props.response.login.response.success;

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


          {/* <div className='pepper'>
            <div className="container salt">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>


                <div className="carousel-inner">
                  <div className="item active">
                    <img src="knife2.png"></img>
                  </div>

                  <div className="item">
                    <img src="knife1.jpg"></img>
                  </div>


                </div>


                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div> */}



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
                <td className=''>#</td>
                <td className=''>Brand</td>
                <td className=''>Model</td>
                <td className=''>Steel</td>
                <td className=''>Price</td>
                <td className='dashTitleMargins'>For Sale</td>
              </tr>
            </tbody>
          </table>
          {renderAllKnives}
        </div>
        // </div>
    );
  }
}

const mapStateToProps = (response) => ({response});
export default connect(mapStateToProps)(DashboardPage); 
