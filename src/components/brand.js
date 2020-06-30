import React from 'react';
import './style.css';

class Brand extends React.Component {
    constructor() {
        super();
        this.state = {
            displayMenu: false,
            displayStyle: false,
            brand: "",
            titleDisplay: true,
            knifeData: [],
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.save = this.save.bind(this);
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

    save(event) {
        event.preventDefault();
        this.setState({ displayStyle: true, brand: "Benchmade", titleDisplay: false, fixedBlade: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    render() {
        return (
            <div className="dropdown">
                {this.state.titleDisplay ? (
                    <div>
                        <input placeholder='Brand' classname='inputStyling' onBlur={this.save} type='text' id='brand' name='text'></input>
                    </div>
                ) :
                    (
                        null
                    )
                }
                {this.state.displayMenu ? (
                    <div className='dropStyling help1'>
                        {this.state.brand}
                    </div>
                ) :
                    (
                        null
                    )
                }
                {this.state.displayStyle ? (
                    <div>
                        <div className='styleStyling dropdownStylingTitle'>{this.state.brand}</div>
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

export default Brand;
