import React, { } from 'react';
import KnifeModal from '../components/knifeModal';
import { Link } from 'react-router-dom';

const CurrentDate = (props) => {
    var tempDate = new Date();
    var date = (tempDate.getMonth() + 1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();
    const currDate = date;
    return (
        <div>
            <p>{currDate}</p>
        </div>
    );
};

const SignOut = (props) => {
    return (
        <Link to='login' className='signOutStyling'>
            Sign Out
        </Link>
    )
}

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
                <tbody>
                    <tr className='dashboardTableHeadStyling'>Add a knife to your collection</tr>
                </tbody>
            </table>
        )
    }
}

class YourKnifePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='dashboard'>
                <SignOut />
                <div className='column1'>
                    <h1 className='yourKnifePageTitle'>BladeX</h1>
                    <div className='dateStyling'>
                        <CurrentDate date={Date()} />
                    </div>
                    <h3 className='knifePageTitle'>YourKnives</h3>
                </div>
                <Table className='tableStyling' />
                <KnifeModal />
                <br></br>
            </div>
        );
    }
}

export default YourKnifePage;
