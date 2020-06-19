import React from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import { Link, Redirect } from 'react-router-dom';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown">
         <div className='dropDownStyling' onClick={this.showDropdownMenu}>Your Knives</div>

          { this.state.displayMenu ? (
          <ul>
         <li><a className="active" href="#Create Page">Fixed Blades</a></li>
         <li><a href="#Manage Pages">Slip Joints</a></li>
         <li><a href="#Create Ads">Flippers</a></li>
         <li><a href="#Manage Ads">Automatic</a></li>
         <li><a href="#Activity Logs">Assisted</a></li>
         <li><Link className='dashboardLinkStyling' to='yourKnives'>Add Knife</Link></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

var displayDropdown = (
  <div style={{display: 'flex', justifyContent: 'center'}} >
    <Dropdown />
  </div>
  );

 
  ReactDOM.render(displayDropdown, document.getElementById('root'));
export default Dropdown;