import React, { Component } from 'react';

const CurrentDate = (props) => {
    return (
        <div>
            <p>The current date is: {props.date}</p>
        </div>
    );
};

class EDCRotationPage extends Component {
    render(
    ) {
      
        return (
            <div className='dashboard'>
                
                <h1 className='loginPageTitle'>BladeX</h1>
                <h3 className='dashboardTitle'>EDC Rotation</h3>
                <CurrentDate date={Date()} />
                {/* <User user={this.props.name} /> */}
                {/* <Table className='tableStyling' /> */}
            </div>
        );
    }
}

export default EDCRotationPage;