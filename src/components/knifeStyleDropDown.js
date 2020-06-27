import React from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import Dropdown from '../components/dropdown';

class KnifeStyleDropDown extends React.Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
            displayStyle: false,
            style: "",
            titleDisplay: true,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.showDisplayStyle1 = this.showDisplayStyle1.bind(this);
        this.showDisplayStyle2 = this.showDisplayStyle2.bind(this);
        this.showDisplayStyle3 = this.showDisplayStyle3.bind(this);
        this.showDisplayStyle4 = this.showDisplayStyle4.bind(this);
        this.showDisplayStyle5 = this.showDisplayStyle5.bind(this);
        this.showDisplayStyle6 = this.showDisplayStyle6.bind(this);
    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    showDisplayStyle1(event) {
        event.preventDefault();
        this.setState({ displayStyle: true, style: "Fixed Blade", titleDisplay: false }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }
    showDisplayStyle2(event) {
        event.preventDefault();
        this.setState({ displayStyle: true, style: "Slip Joint", titleDisplay: false }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }
    showDisplayStyle3(event) {
        event.preventDefault();
        this.setState({ displayStyle: true, style: "Flipper", titleDisplay: false }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }
    showDisplayStyle4(event) {
        event.preventDefault();
        this.setState({ displayStyle: true, style: "Automatic", titleDisplay: false }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }
    showDisplayStyle5(event) {
        event.preventDefault();
        this.setState({ displayStyle: true, style: "Assisted", titleDisplay: false }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }
    showDisplayStyle6(event) {
        event.preventDefault();
        this.setState({ displayStyle: true, style: "Thumb Stud", titleDisplay: false }, () => {
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
                {this.state.titleDisplay ? (
                    <div className='dropDownStylingTitle' onClick={this.showDropdownMenu}>Select Knife Style</div>
                ) :
                    (
                        null
                    )
                }

                {this.state.displayMenu ? (
                    <div className='dropStyling help1'>
                        <ul>
                            <li className='knifeStyleDropdown dropDownStyling' onClick={this.showDisplayStyle1}>Fixed Blade</li>
                            <li className='knifeStyleDropdown dropDownStyling' onClick={this.showDisplayStyle2}>Slip Joint</li>
                            <li className='knifeStyleDropdown dropDownStyling' onClick={this.showDisplayStyle3}>Flipper</li>
                            <li className='knifeStyleDropdown dropDownStyling' onClick={this.showDisplayStyle4}>Automatic</li>
                            <li className='knifeStyleDropdown dropDownStyling' onClick={this.showDisplayStyle5}>Assisted</li>
                            <li className='knifeStyleDropdown dropDownStyling' onClick={this.showDisplayStyle6}>Thumb Stud</li>
                        </ul>
                    </div>
                ) :
                    (
                        null
                    )
                }
                {this.state.displayStyle ? (
                    <div>
                        <div className='styleStyling dropDownStylingTitle'>{this.state.style}</div>
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
export default KnifeStyleDropDown;
