import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import addKnife from './addKnifeReducer';

const rootReducer = combineReducers({
  register, login, addKnife
});

export default rootReducer;