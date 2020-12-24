import { combineReducers, createStore } from 'redux';
import userEventsReducer from './user-event';

const rootReducer = combineReducers({
  uerEvents: userEventsReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);
export default store;
