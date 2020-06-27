import React, { Component } from 'react';
import { addKnifeAction } from "../actions/authenticationActions";
import { connect } from 'react-redux';
import KnifeStyleDropdown from './knifeStyleDropdown';

class KnifeModal extends Component {
    onHandleSave = (event) => {
        event.prevent.Default();
        
        let brand = event.target.brand.value;
        let model = event.target.model.value;
        let price = event.target.price.value;
        let steel = event.target.steel.value;
        let bladeShape = event.target.bladeShape.value;
        let forSale = event.target.forSale.value;
        let forSalePrice = event.target.forSalePrice.value;
        
        const knifeData = {
            brand, model, price, steel, bladeShape, forSale, forSalePrice
        };
        this.props.dispatch(addKnifeAction(knifeData));
        console.log(knifeData.bladeShape);
        this.saveNewKnife = this.saveNewKnife.bind(this);
    }
    UNSAFE_componentDidMount() {
        document.title = 'Knife Modal';
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onHandleSave}>
                    <br></br>
                    <div>
                        <KnifeStyleDropdown />
                        <br></br>
                        <br></br>
                        <label htmlFor="brand"></label>
                        <input type="brand" placeholder='Brand' name="brand" id="brand" />
                        <br></br>
                        <br></br>
                        <label htmlFor="model"></label>
                        <input type="model" placeholder='Model' name="model" id="model" />
                        <br></br>
                        <br></br>
                        <label htmlFor="price"></label>
                        <input type="price" placeholder='Price Paid' name="price" id="price" />
                        <br></br>
                        <br></br>
                        <label htmlFor="steel"></label>
                        <input type="steel" placeholder='Knife Steel' name="steel" id="steel" />
                        <br></br>
                        <br></br>
                        <label htmlFor="bladeShape"></label>
                        <input type="bladeShape" placeholder='Blade Shape' name="bladeShape" id="bladeShape" />
                        <br></br>
                        <br></br>
                        <button className='addKnifeSaveButton'>Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(KnifeModal);
