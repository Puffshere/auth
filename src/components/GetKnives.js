import React, { Component } from 'react';
import Knives from './knives';

class GetKnives extends Component {
    state = {
        knives: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/knives?access_token=5e3600914e63efce06c8cee3')
            .then(res => res.json())
            .then((data) => {
                this.setState({ knives: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
            <Knives knives={this.state.knives} />
            </div>
        )
    }
}

export default GetKnives
