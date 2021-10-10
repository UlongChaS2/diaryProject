import { GET_NOTE_REQUEST } from './actionstypes';

export const getNoteSagaAction = () => {
  return {
    type: GET_NOTE_REQUEST,
  };
};
