import React, { Component } from 'react';
import Search from '../components/search';
import FixedBladesList from '../components/fixedBladesList';
import AddKnifeForm from '../components/addKnifeForm';


const CurrentDate = (props) => {
    return (
        <div>
            <p>The current date is: {props.date}</p>
        </div>
    );
};

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
    }
    render() {
        return (
            <table className='dashboardTableStyling'>
                <tr className='dashboardTableHeadStyling'><h3>Select Category</h3></tr>
                <p>
                    <FixedBladesList fixedList={'SpyderCo, BenchMade'} />
                </p>
                <tr>Automatic</tr>
                <tr>Flippers</tr>
                <tr>Slip Joints</tr>
                <tr>Assisted</tr>
            </table>
        )
    }
}

const User = (props) => {
    return (
        <div>
            <p>Welcome {props.name}</p>
        </div>
    );
};

class YourKnifePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
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
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }
    render() {
        return (
            <div className='dashboard'>
                <h1 className='loginPageTitle'>BladeX</h1>
                <h3 className='dashboardTitle'>Your Knives</h3>
                <CurrentDate date={Date()} />
                <User user={this.props.name} />
                <Search />
                <AddKnifeForm />
                {/* <GetInput handleChange={this.handleChange} input={this.state.inputValue} />
                <RenderInput input={this.state.inputValue} /> */}
                <Table />
            </div>
        );
    }
}

class GetInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Get Input:</h3>
                <input
                    value={this.props.input}
                    onChange={this.props.handleChange} />
            </div>
        );
    }
};

class RenderInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        );
    }
};

export default YourKnifePage;