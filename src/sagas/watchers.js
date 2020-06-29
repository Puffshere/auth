import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga, dataSaga } from './authenticationSaga';

import * as types from '../actions';

export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.DATA, dataSaga);
}
