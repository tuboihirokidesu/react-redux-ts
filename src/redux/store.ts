import { combineReducers, createStore } from 'redux';
import recorderReducer from './recorder';
import userEventsReducer from './user-event';

const rootReducer = combineReducers({
  uerEvents: userEventsReducer,
  recorder: recorderReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);
export default store;
