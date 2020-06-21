import React, { Component } from 'react';

import knives from '../components/mockData';
class GetLocalPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            knives: knives
        };
    }

    render() {
        const { knives } = this.state;
        return (
            <div>
                {/* <table>
                    <thead>
                        <tr>
                            <th><h4>Knife</h4></th>
                            <th><h4>Blade Shape</h4></th>
                            <th><h4>Steel</h4></th>
                            <th><h4>Price</h4></th>
                        </tr>
                    </thead>
                </table> */}
                <ol className="item">
                    {
                        knives.map(knife => (
                            <div key={knife.id} align="start">
                                <table className='container showStopper'>
                                    <thead>
                                        <tr></tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='show shane'>{knife.brand} {knife.model}</td>
                                            <td className='show shane'>{knife.bladeShape}</td>
                                            <td className='show shane'>{knife.steel}</td>
                                            <td className='show shane'>{knife.price}</td>
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
}

export default GetLocalPosts;