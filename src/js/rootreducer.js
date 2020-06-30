import { combineReducers } from 'redux';
import searchReducer from './components/SearchTitle/SearchReducer';
import detailReducer from './components/MovieDetails/detailReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    detail: detailReducer
});

export default rootReducer;