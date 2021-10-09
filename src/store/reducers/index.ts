import { combineReducers } from 'redux';
import modalsReducer from './modals';

const rootReducer = combineReducers({
  modals: modalsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
