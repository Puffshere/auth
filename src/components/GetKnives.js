import React, { Component } from 'react';
import Knives from './knives';

class GetKnives extends Component {
    state = {
        blades: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/blades?access_token=5e3600914e63efce06c8cee3')
            .then(res => res.json())
            .then((data) => {
                this.setState({ blades: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
            <Knives knives={this.state.blades} />
            </div>
        )
    }
}

export default GetKnives
