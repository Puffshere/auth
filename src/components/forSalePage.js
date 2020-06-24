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
      ]
    }
  }

  render() {
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
