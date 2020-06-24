import React from 'react'

const ForSaleKnives = ({ knives }) => {
    return (
        <div>
            <center><h2 className='allKnivesStyling'>Knives for Sale:</h2></center>
            <table className='container showStopper nice'>
                <tbody>
                    <tr>
                        <td className=''>Brand</td>
                        <td className=''>Model</td>
                        <td className=''>Price</td>
                    </tr>
                </tbody>
            </table>
            {knives.map((knife) => (
                <div key={knife.id} align="start">
                    <table className='container tableBackground showStopper'>
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='show shane'>{knife.brand}</td>
                                <td className='show shane'>{knife.model}</td>
                                <td className='show shane'>${knife.forSalePrice}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    )
};

export default ForSaleKnives