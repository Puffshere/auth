import React, { Component } from 'react';

import knives from '../components/mockData';
// get posts from online api
// it's return a json file
class GetLocalPosts extends Component {
    constructor(props){
        super(props);
        this.state = {            
            knives :knives            
        };
    }

    render() {
        const {knives} = this.state;
        return(
            <div>
                <ol className="item">
                {
                    knives.map(knife => (
                        <div key={knife.id} align="start">
                                <tr className="body">{knife.id} {knife.brand} {knife.model}</tr>
                                
                        </div>
                    ))
                }
                </ol>
            </div>
        );
    }
  }
  
  export default GetLocalPosts;