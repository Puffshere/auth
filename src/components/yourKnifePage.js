import React, { } from 'react';
// import Search from '../components/search';
// import FixedBladesList from '../components/fixedBladesList';
import AddKnifeForm from '../components/addKnifeForm';
import KnifeModal from '../components/knifeModal';

const CurrentDate = (props) => {
    return (
        <div>
            <p>The current date is: {props.date}</p>
        </div>
    );
};

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

        };
    }


render() {
    return (
        <div className='dashboard'>
            <h1 className='loginPageTitle'>BladeX</h1>
            <h3 className='dashboardTitle'>Your Knives</h3>
            <CurrentDate date={Date()} />
            <User user={this.props.name} />
            {/* <Search /> */}
            <KnifeModal />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <AddKnifeForm />
            {/* <GetInput handleChange={this.handleChange} input={this.state.inputValue} />
                <RenderInput input={this.state.inputValue} /> */}
            {/* <Table /> */}
        </div>
    );
}
}

// class GetInput extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h3>Get Input:</h3>
//                 <input
//                     value={this.props.input}
//                     onChange={this.props.handleChange} />
//             </div>
//         );
//     }
// };

// class RenderInput extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h3>Input Render:</h3>
//                 <p>{this.props.input}</p>
//             </div>
//         );
//     }
// };

export default YourKnifePage;