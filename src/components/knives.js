import React from 'react'

const Knives = ({ knives }) => {
    return (
        <div>
            <center><h2 className='allKnivesStyling'>All Knives:</h2></center>
            <table className='container showStopper nice'>
                <tbody>
                    <tr>
                        <td className=''>Brand</td>
                        <td className=''>Model</td>
                        <td className=''>Blade Shape</td>
                        <td className=''>Steel</td>
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
                                <td className='show shane'>{knife.bladeShape}</td>
                                <td className='show shane'>{knife.steel}</td>
                                <td className='show shane'>${knife.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    )
};

export default Knives
