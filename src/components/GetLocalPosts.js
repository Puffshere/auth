import React, { Component } from 'react';
import Knives from '../components/knives';

class GetLocalPosts extends Component {
    state = {
        knives: []
    }

    componentDidMount() {
        fetch('http://localhost:4000/knives')
            .then(res => res.json())
            .then((data) => {
                this.setState({ knives: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <Knives knives={this.state.knives} />
        )
    }
}
export default GetLocalPosts