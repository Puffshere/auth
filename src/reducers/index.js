import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import data from './dataReducer';

const rootReducer = combineReducers({
  register, login, data
});

export default rootReducer;


