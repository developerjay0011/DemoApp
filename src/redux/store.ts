import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer, { AppState } from './reducers'; // Adjust import path as necessary

// Middleware setup including Thunk
const middleware = applyMiddleware(thunk);

// Create the store with middleware
const store = createStore(rootReducer, middleware);

export default store;
export type { AppState }; // Export the AppState type for use in your app
