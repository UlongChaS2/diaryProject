import { put, call, takeLatest, StrictEffect } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { getNotesAPI } from 'utils/serverApi';
import { startLoading, finishLoding } from 'store/actions/serverStatus';
import {
  GET_NOTE_REQUEST,
  GET_NOTE_SUCCESS,
  GET_NOTE_FAILURE,
} from 'store/actions/actionstypes';

function* getNotesSaga() {
  yield put(startLoading(GET_NOTE_REQUEST));

  try {
    const res: AxiosResponse = yield call(getNotesAPI);
    console.log('res', res);
    if (res.status === 200) {
      yield put({
        type: GET_NOTE_SUCCESS,
        payload: res.data,
      });
      yield put(finishLoding(GET_NOTE_REQUEST));
    } else {
      throw new Error();
    }
  } catch (e) {
    yield put({
      type: GET_NOTE_FAILURE,
      payload: e,
      error: true,
    });
  }
}

export function* serverApiSaga(): Generator<StrictEffect> {
  yield takeLatest(GET_NOTE_REQUEST, getNotesSaga);
}
