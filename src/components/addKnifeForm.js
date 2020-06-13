import React, { Component } from 'react';

class AddKnifeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            brand: '',
            visibility: false,
            inputModel: '',
            model: '',
            pricePaid: 0,
            wouldSalePrice: 0,
            listForSale: false,
            brandArray: '',
        };
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
          input: event.target.value,
          
        });
      }
    handleChange1(event) {
        this.setState({
          inputModel: event.target.value,
        });
      }

      handleSubmit(event) {
        event.preventDefault()
        this.setState({
          brand: this.state.input,
          model: this.state.inputModel,
          brandArray: this.state.input + this.state.brandArray,
          input: '',
          inputModel: '',
        });
      }

    toggleVisibility() {
        this.setState(state => ({
            visibility: !state.visibility
        }));
    }

    render() {
        if (this.state.visibility) {
            return (
                <div>
                    <button className='dashboardLinkStyling' onClick={this.toggleVisibility}>Finished</button>
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.input} placeholder='Brand' onChange={this.handleChange} />
                        <input value={this.state.inputModel} placeholder='Model' onChange={this.handleChange1} />
                        {/* <input>Price Paid</input> */}
                        {/* <input>Would Sale Price</input> */}
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                    <button className='dashboardLinkStyling' onClick={this.toggleVisibility}>Add a Knife</button>
                    <p>{this.state.brandArray} {this.state.model}</p>
                </div>
            );
        }
    };
}

export default AddKnifeForm;