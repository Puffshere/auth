import React from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class Dropdown extends React.Component {
  constructor() {
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
      <div className="dropdown">
        <div className='dropDownStyling' onClick={this.showDropdownMenu}>Your Knives</div>

        {this.state.displayMenu ? (
          <div className='dropStyling help1'>
          <ul>
            <li className='help'><a href="#Create Page">All Knives</a></li>
            <li className='help'><a href="#Create Page">Fixed Blades</a></li>
            <li className='help'><a href="#Manage Pages">Slip Joints</a></li>
            <li className='help'><a href="#Create Ads">Flippers</a></li>
            <li className='help'><a href="#Manage Ads">Automatic</a></li>
            <li className='help'><a href="#Activity Logs">Assisted</a></li>
            <li className='help'><Link className='dashboardLinkStyling' to='yourKnives'>Add Knife</Link></li>
          </ul>
          </div>
        ) :
          (
            null
          )
        }
      </div>
    );
  }
}

var displayDropdown = (
  <div>
    <Dropdown />
  </div>
);

ReactDOM.render(displayDropdown, document.getElementById('root'));
export default Dropdown;
