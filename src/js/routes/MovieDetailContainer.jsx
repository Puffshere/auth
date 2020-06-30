  
import React from 'react';
import Detail from '../components/MovieDetails'

class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Detail movieID={this.props.match.params.id} />
            </div>
        )
    }
}

export default MovieDetailContainer;