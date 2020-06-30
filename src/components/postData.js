import React, { Component } from 'react';

class AddData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "",
            model: "",
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.save = this.save.bind(this);
    }

    onInputChange(e) {
        this.setState({ brand: e.target.value });
        console.log(this.state.brand);
    }

    onSelectChange(e) {
        this.setState({ model: e.target.value });
        console.log(this.state.model);
    }

    save(e) {
        this.setState({ model: e.target.value });
    }

    render() {
        return (
            <div>
                <input type='text' name='brand' onChange={this.onInputChange} placeholder='brand' ></input>
                <input type='text' name='model' onChange={this.onSelectChange} placeholder='model'></input>
                <button className='addKnifeSaveButton' onClick={this.save}>Save</button>
                <div>{this.state.model}</div>
                <div>{this.state.brand}</div>
            </div>
        );
    }
}

export default AddData;
