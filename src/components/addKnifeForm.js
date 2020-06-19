import React, { } from 'react';
import Checkbox from '../components/checkbox'

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
            modelArray: '',
            checked: false,
        };
        // state = { checked: false }
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
            modelArray: this.state.inputModel + this.state.modelArray,
            input: '',
            inputModel: '',
        });
    }

    toggleVisibility() {
        this.setState(state => ({
            visibility: !state.visibility
        }));
    }

    handleCheckboxChange = event => {
        this.setState({ checked: event.target.checked })
    }

    render() {

        if (this.state.visibility) {
            return (
                <div>
                    <div style={{ fontFamily: 'system-ui' }}>
                        <label>
                            <Checkbox
                                checked={this.state.checked}
                                onChange={this.handleCheckboxChange}
                            />
                        </label>
                    </div>
                    <button className='dashboardLinkStyling' onClick={this.toggleVisibility}>Finished</button>
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.input} placeholder='Brand' onChange={this.handleChange} />
                        <input value={this.state.inputModel} placeholder='Model' onChange={this.handleChange1} />
                        <Checkbox checked={this.state.checked}
                            onChange={this.handleCheckboxChange} />
                        <Checkbox checked={this.state.checked}
                            onChange={this.handleCheckboxChange} />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                    <button className='dashboardLinkStyling' onClick={this.toggleVisibility}>Add a Knife</button>
                    <p>{this.state.brandArray} {this.state.modelArray}</p>
                </div>
            );
        }
    };
}

export default AddKnifeForm;
