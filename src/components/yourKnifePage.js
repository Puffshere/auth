import React, { Component } from 'react';
import Search from '../components/search';
import FixedBladesList from '../components/fixedBladesList';

const CurrentDate = (props) => {
    return (
        <div>
            <p>The current date is: {props.date}</p>
        </div>
    );
};

const Table = () => {
    return (
        <table className='dashboardTableStyling'>
            <tr className='dashboardTableHeadStyling'><h3>Select Category</h3></tr>
        <p>
            <FixedBladesList fixedList='SpyderCo, BenchMade' />
        </p>
        <tr>Automatic</tr>
        <tr>Flippers</tr>
        <tr>Slip Joints</tr>
        <tr>Assisted</tr>
        </table>
    )    
}

const User = (props) => {
    return (
        <div>
            <p>Welcome {props.name}</p>
        </div>
    );
};

class YourKnifePage extends Component {
    render(
    ) {
      
        return (
            <div className='dashboard'>
                
                <h1 className='loginPageTitle'>BladeX</h1>
                <h3 className='dashboardTitle'>Your Knives</h3>
                <CurrentDate date={Date()} />
                <User user={this.props.name} />
                <Search/>
                <Table />
            </div>
        );
    }
}

export default YourKnifePage;