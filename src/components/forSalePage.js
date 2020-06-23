import React, { } from 'react';
import knives from '../components/mockData';

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

class ForSalePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      knives: [
        // {
        //   model: 'Bugout',
        //   forSale: true
        // },
        // {
        //   model: '940',
        //   forSale: false
        // },
        // {
        //   model: 'Atmos',
        //   forSale: true
        // },
        // {
        //   model: 'Sebenza21',
        //   forSale: false
        // },
        // {
        //   model: 'Griptilian',
        //   forSale: true
        // },
        // {
        //   model: 'Leek',
        //   forSale: true
        // }
      ]
    }
  }

  render() {
    // const modelForSale = this.state.knives.filter(i => i.forSale === true);
    // const renderOnline = modelForSale.map((i) => <div key={i.model + 1}>{i.model}</div>);
    return (
      <div className='dashboard'>
        <h1 className='loginPageTitle'>BladeX</h1>
        <h3 className='forSaleTitle'>For Sale</h3>
        <CurrentDate date={Date()} />
        <h1 className='forSaleTitleStyling'>Current Knives for Sale:</h1>
        <ol className="">
          {
            knives.map(knife => (
              <div key={knife.id} align="start">
                <table className='container tableBackground'>
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='show shane'>{knife.brand} {knife.model}</td>
                      <td className='show shane'>Asking Price:  {knife.forSale}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
          }
        </ol>
      </div>
    );
  }
};

export default ForSalePage;
