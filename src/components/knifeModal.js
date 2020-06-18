import React, { Component } from 'react';
import { addKnifeAction } from "../actions/authenticationActions";
import { connect } from 'react-redux';

class KnifeModal extends Component {
    onHandleSave = (event) => {
        event.prevent.Default();

        let brandName = event.target.brandName.value;
        let model = event.target.model.value;
        let pricePaid = event.target.pricePaid.value;
        let knifeSteel = event.target.knifeSteel.value;
        let handleMaterial = event.target.handleMaterial.value;
        let forSalePrice = event.target.forSalePrice.value;

        const knifeData = {
            brandName, model, pricePaid, knifeSteel, handleMaterial, forSalePrice
        };

        this.props.dispatch(addKnifeAction(knifeData));
        console.log(knifeData.handleMaterial);
    }
    // UNSAFE_componentDidMount() {
    //     document.title = 'Knife Modal';
    //   }
      render() {
          return(
              <div>
                  <div className='loginPageTitle'>Add A Knife:</div>
                   <form onSubmit={this.onHandleSave}>
          <br></br>
          <div>
                   <label htmlFor="brandName"></label>
            <input type="brandName" placeholder='Brand' name="brandName" id="brandName" />
            <br></br>
            <br></br>
                   <label htmlFor="model"></label>
            <input type="model" placeholder='Model' name="model" id="model" />
            <br></br>
            <br></br>
                   <label htmlFor="pricePaid"></label>
            <input type="pricePaid" placeholder='Price Paid' name="pricePaid" id="pricePaid" />
            <br></br>
            <br></br>
                   <label htmlFor="knifeSteel"></label>
            <input type="knifeSteel" placeholder='Knife Steel' name="knifeSteel" id="knifeSteel" />
            <br></br>
            <br></br>
                   <label htmlFor="handleMaterial"></label>
            <input type="handleMaterial" placeholder='Handle Material' name="handleMaterial" id="handleMaterial" />
            <br></br>
            <br></br>
                   <label htmlFor="forSalePrice"></label>
            <input type="forSalePrice" placeholder='For Sale Price' name="forSalePrice" id="forSalePrice" />
            <br></br>
            <br></br>

            <button>Save</button>
                 </div>
                 </form>
              </div>
          )
      }
}
export default connect()(KnifeModal);