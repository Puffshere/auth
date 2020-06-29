import * as types from '../actions';

export default function (state = [], action) {
  const response = action.response;

  switch (action.type) {
    case types.DATA_SUCCESS:
      return { ...state, response };
    case types.DATA_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};