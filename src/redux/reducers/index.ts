import { combineReducers } from 'redux';
// Import your reducers here
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
  news: newsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
