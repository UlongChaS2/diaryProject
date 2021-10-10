import {
  START_LOADING,
  FINISH_LOADING,
  GET_NOTE_REQUEST,
} from './actionstypes';

export const startLoading = (requestType: string) => ({
  type: START_LOADING,
  requestType,
});
export const finishLoding = (requestType: string) => ({
  type: FINISH_LOADING,
  requestType,
});

export const getNoteSagaAction = () => {
  return {
    type: GET_NOTE_REQUEST,
  };
};
