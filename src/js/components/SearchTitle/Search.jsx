import React from 'react';

import {
    updateMovie,
    getMovie
} from './searchActions'

class Search extends React.Component {
    constructor(props) {
        super(props);
        // this.handleMovieInput = this.handleMovieInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    // handleMovieInput(event) {
    //     const { dispatch } = this.props;
    //     const { value } = event.target;
    //     dispatch(updateMovie(value));
    // }

    handleSearch(e) {
        e.preventDefault();
        const { dispatch, movieSearch } = this.props;
        dispatch(getMovie(movieSearch))
    }

    render() {
        const { movieSearch } = this.props;
        return (
            <div className='container'>
                <form onSubmit={this.handleSearch} >
                    <div className='row'>
                        <div className='input-group middle'>
                            <tr>
                                <td>
                                    <input required type='text' className='form-control slang text-white' name='' placeholder='Search' value={movieSearch} onChange={this.handleMovieInput} />
                                </td>
                                <div className='input-group-append'>
                                    <td>
                                        <button className='btn animal text-white' id='search' type='submit'>Go!</button>
                                    </td>
                                </div>
                            </tr>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;
