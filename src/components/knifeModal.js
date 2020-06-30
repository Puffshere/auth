import React, { Component } from 'react';
import { dataAction } from "../actions/authenticationActions";
import { connect } from 'react-redux';
import KnifeStyleDropdown from './knifeStyleDropDown';
import Brand from '../components/brand';
import Model from '../components/model';
import Price from '../components/price';
import Steel from '../components/steel';
import BladeShape from '../components/bladeShape';
import HandleMaterial from './handleMaterial';

class KnifeModal extends Component {
    state = {
        brand: [
        ]
    }

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

        this.props.dispatch(dataAction(knifeData));

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
                    <div>
                        <br></br>
                        <KnifeStyleDropdown />
                        <br></br>
                        <br></br>
                        <Brand />
                        <br></br>
                        <br></br>
                        <Model />
                        <br></br>
                        <br></br>
                        <Price />
                        <br></br>
                        <br></br>
                        <Steel />
                        <br></br>
                        <br></br>
                        <BladeShape />
                        <br></br>
                        <br></br>
                        <HandleMaterial />
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
