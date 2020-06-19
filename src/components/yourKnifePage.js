import React, { } from 'react';
import AddKnifeForm from '../components/addKnifeForm';
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

// class Table extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             input: '',
//         };
//     }
//     render() {
//         return (
//             <table className='dashboardTableStyling'>
//                 <tbody>
//                 <tr className='dashboardTableHeadStyling'>Select Category</tr>

//                     <FixedBladesList fixedList={'SpyderCo, BenchMade'} />

//                 <tr>Automatic</tr>
//                 <tr>Flippers</tr>
//                 <tr>Slip Joints</tr>
//                 <tr>Assisted</tr>
//                 </tbody>
//             </table>
//         )
//     }
// }

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
                <h1 className='yourKnifePageTitle'>BladeX</h1>
                <h3 className='dashboardTitle'>Your Knives</h3>
                <CurrentDate date={Date()} />
                <KnifeModal />
                <br></br>
                <AddKnifeForm />
                {/* <Table /> */}
            </div>
        );
    }
}

export default YourKnifePage;