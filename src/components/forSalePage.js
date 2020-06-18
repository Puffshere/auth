import React, {} from 'react';

const CurrentDate = (props) => {
  var tempDate = new Date();
  var date = (tempDate.getMonth()+1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();
  const currDate = date;
  return (
    <div>
      <p>The current date is: {currDate}</p>
    </div>
  );
};

class ForSalePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        knives: [
          {
            model: 'Bugout',
            forSale: true
          },
          {
            model: '940',
            forSale: false
          },
          {
            model: 'Atmos',
            forSale: true
          },
          {
            model: 'Sebenza21',
            forSale: false
          },
          {
            model: 'Griptilian',
            forSale: true
          },
          {
            model: 'Leek',
            forSale: true
          }
        ]
      }
    }
    render() {
      const modelForSale = this.state.knives.filter(i => i.forSale === true);
      const renderOnline = modelForSale.map((i) => <div key={i.model + 1}>{i.model}</div>);
      return (
         <div className='dashboard'>
             <h1 className='loginPageTitle'>BladeX</h1>
                <h3 className='dashboardTitle'>For Sale</h3>
                <CurrentDate date={Date()} />
           <h1>Current Knives for Sale</h1>
             {renderOnline}
         </div>
      );
    }
  };

export default ForSalePage;