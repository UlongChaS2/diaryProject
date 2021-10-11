import { START_LOADING, FINISH_LOADING } from './actionstypes';

export const startLoading = (requestType: string) => {
  let loading;
  return { type: START_LOADING, payload: { requestType, loading } };
};

export const finishLoding = (requestType: string) => {
  let loading;
  return { type: FINISH_LOADING, payload: { requestType, loading } };
};
