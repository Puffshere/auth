import React, { Component } from 'react';

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
            <th className='dashboardTableHeadStyling'><h3>Your Knives</h3></th>
            {/* <th className='dashboardTableHeadStyling'>For Sale</th>
            <th className='dashboardTableHeadStyling'>EDC Rotation</th>
        <th className='dashboardTableHeadStyling'>Wish List</th> */}
        <tr>Fixed Blades</tr>
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
                <Table className='tableStyling' />
            </div>
        );
    }
}

export default YourKnifePage;