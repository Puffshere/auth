import React from 'react'

const Knives = ({ knives }) => {
    return (
        <div>
            <center><h2 className='allKnivesStyling'>All Knives:</h2></center>
            {knives.map((knife) => (
                <div key={knife.id} align="start">
                    <table className='container showStopper'>
                        <thead>
                            <tr></tr>
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