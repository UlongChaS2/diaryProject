import { AnyAction } from 'redux';
import { SHOW_MODAL, CLOSE_MODAL } from 'store/actions/types';

const INITIAL_STATE = {
  showModal: false,
};

export default function modalsReducer(
  state = INITIAL_STATE,
  action: AnyAction
) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        title: action.title,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
}
