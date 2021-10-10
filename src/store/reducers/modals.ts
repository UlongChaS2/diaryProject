import { AnyAction } from 'redux';
import { SHOW_MODAL, CLOSE_MODAL } from '../actions/actionstypes';

const INITIAL_STATE = {
  isModalOpen: false,
};

export default function modals(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isModalOpen: true,
        title: action.title,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
}
