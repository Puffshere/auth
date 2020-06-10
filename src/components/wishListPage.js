import React, { Component } from 'react';

const CurrentDate = (props) => {
    return (
        <div>
            <p>The current date is: {props.date}</p>
        </div>
    );
};

class WishListPage extends Component {
    render(
    ) {
      
        return (
            <div className='dashboard'>
                
                <h1 className='loginPageTitle'>BladeX</h1>
                <h3 className='dashboardTitle'>Wish List</h3>
                <CurrentDate date={Date()} />
                {/* <User user={this.props.name} /> */}
                {/* <Table className='tableStyling' /> */}
            </div>
        );
    }
}

export default WishListPage;