import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BladeDetails extends Component {
    state = {
        blades: [],
        id: 5,
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/blades/?access_token=5e3600914e63efce06c8cee3')
            .then(res => res.json())
            .then((data) => {
                this.setState({ blades: data })
            })
            .catch(console.log)
    }

    render() {

        const allKnivestrue = this.state.blades.filter(i => i.id === this.state.id);
        const renderAllKnives = allKnivestrue.map((i) =>

            <div className='row'>
                <img className='detail col-5 mt-3 mb-3' src="knife4.jpg"></img>
                <div className='col-7 mt-3 mb-3'>
                    <h2 id='title'>{i.brand}</h2>
                    <h2 id='title'>{i.model}</h2>
                    <p>Price:  ${i.price}</p>
                    <h6 className='metascore'>For Sale Price:  ${i.forSalePrice}</h6>
                    <hr></hr>
                    <p>Steel:  {i.steel}</p>
                    <p>Handle Material:  {i.handleMaterial}</p>
                    <p>Blade Shape:  {i.bladeShape}</p>
                    <h6 style={{ padding: 20, float: "right" }}>Knife Id: {i.id}</h6>
                </div>
            </div>
        );

        return (
            <div className='mud'>
                <div className='container card mt-3 mb-3 p-0 space'>
                    <div className='card-body'>
                        <div className='container'>
                            {renderAllKnives}
                            <Link className='detailsStyling' to='dashboard'>Return to DashBoard</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BladeDetails
