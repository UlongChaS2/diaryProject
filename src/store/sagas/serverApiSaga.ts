import { put, call, take, takeLatest, StrictEffect } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { startLoading } from 'store/actions/serverApi';
import { getNotesAPI } from 'utils/serverApi';
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
