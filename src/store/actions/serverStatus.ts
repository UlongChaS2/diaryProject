import { START_LOADING, FINISH_LOADING } from './actionstypes';

export const startLoading = (requestType: string) => ({
  type: START_LOADING,
  requestType,
  payload: 'loading',
});

export const finishLoding = (requestType: string) => ({
  type: FINISH_LOADING,
  requestType,
  payload: 'loading',
});
