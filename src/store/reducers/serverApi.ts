import { AnyAction } from 'redux';
import {
  START_LOADING,
  FINISH_LOADING,
  GET_NOTE_SUCCESS,
  GET_NOTE_FAILURE,
} from 'store/actions/actionstypes';

const initialStete = {};

// 리듀서 작성
export function loading(state = initialStete, action: AnyAction) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        [action.payload]: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        [action.payload]: false,
      };
    default:
      return state;
  }
}

const INITIAL_GET_NOTE = {
  note: null,
};

export function serverApi(state = INITIAL_GET_NOTE, action: AnyAction) {
  switch (action.type) {
    case GET_NOTE_SUCCESS:
      return {
        ...state,
        note: action.payload,
      };
    case GET_NOTE_FAILURE:
    default:
      return state;
  }
}
