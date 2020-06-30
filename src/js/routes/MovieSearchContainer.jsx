
import React from 'react';
import Search from '../components/SearchTitle';
import Result from '../components/ResultOfSearch';

class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ backgroundImage: 'url("image.png")', height: "120vh"}}>
            <div className='container'>
                <br></br>
                <br></br>
                <div className='row'>
                    <div className='col-12 slang'>
                        <h1 className='cat'>Movie Finder</h1>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='row mb-4'>
                    <Search className='col-12' />
                </div>
                <br></br>
                <br></br>
                <div className='row justify-content-center'>
                    <Result className='col-12' />
                </div>
            </div>
            </div>
        )
    }
}

export default MovieSearchContainer;