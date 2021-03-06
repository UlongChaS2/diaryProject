import { AnyAction } from 'redux';
import { GET_NOTE_SUCCESS, GET_NOTE_FAILURE } from 'store/actions/actionstypes';

const INITIAL_STATE = {
  data: null,
};

export default function serverApi(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case GET_NOTE_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case GET_NOTE_FAILURE:
    default:
      return state;
  }
}
