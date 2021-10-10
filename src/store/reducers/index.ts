import { combineReducers } from 'redux';
import modals from './modals';
import serverApi from './serverApi';
import serverStatus from './serverStatus';

const rootReducer = combineReducers({
  modals,
  serverApi,
  serverStatus,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
