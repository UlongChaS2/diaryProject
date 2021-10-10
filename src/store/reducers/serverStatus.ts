import { AnyAction } from 'redux';
import { START_LOADING, FINISH_LOADING } from 'store/actions/actionstypes';

const INITIAL_STATE = {};

export default function serverStatus(state = INITIAL_STATE, action: AnyAction) {
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
