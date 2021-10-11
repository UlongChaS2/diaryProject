import { AnyAction } from 'redux';
import { START_LOADING, FINISH_LOADING } from 'store/actions/actionstypes';

const INITIAL_STATE = {};

export default function serverStatus(state = INITIAL_STATE, action: AnyAction) {
  // console.log(action.payload);
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
