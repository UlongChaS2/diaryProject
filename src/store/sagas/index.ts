import { all } from 'redux-saga/effects';
import { serverApiSaga } from './serverApiSaga';

function* rootSaga() {
  yield all([serverApiSaga()]);
}

export default rootSaga;
