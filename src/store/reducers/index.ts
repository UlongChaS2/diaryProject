import { combineReducers } from 'redux';
import modals from './modals';
import { serverApi } from './serverApi';

const rootReducer = combineReducers({
  modals,
  serverApi,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
