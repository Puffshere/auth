import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUserAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';

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
            <th className='dashboardTableHeadStyling'>Your Knives</th>
            <th className='dashboardTableHeadStyling'>For Sale</th>
            <th className='dashboardTableHeadStyling'>EDC Rotation</th>
            <th className='dashboardTableHeadStyling'>Wish List</th>
            <Link className='linkColor' to='register'>Register here</Link>
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
        let isSuccess, message;

        if (this.props.response.login.hasOwnProperty('response')) {
            isSuccess = this.props.response.login.response.success;
            message = this.props.response.login.response.message;

            if (isSuccess) {
                setCookie('token', this.props.response.login.response.token, 1);
            }
        }
        return (
            <div className='dashboard'>
                {!isSuccess ? <div>{message}</div> : <Redirect to='dashboard' />}
                <h1 className='loginPageTitle'>BladeX</h1>
                <h3 className='dashboardTitle'>Dashboard</h3>
                <CurrentDate date={Date()} />
                <User user={this.props.name} />
                <Table className='tableStyling' />
            </div>
        );
    }
}

export default YourKnifePage;