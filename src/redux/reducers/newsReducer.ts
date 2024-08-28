import { AnyAction } from 'redux';
import { ExampleActionTypes } from '../../types/exampleActionTypes'; // Correct import path


// Define the state interface
export interface ExampleState {
  news_list: any;
  topic_list: any;
  error: string | null;
}

// Initial state
const initialState: ExampleState = {
  news_list: { list: [], load: false },
  topic_list: { list: [], load: false },
  error: null,
};

// Reducer
const exampleReducer = (state = initialState, action: AnyAction): ExampleState => {
  switch (action.type) {
    case ExampleActionTypes.SET_DATA:
      return {
        ...state,
        news_list: action.payload,
        error: null
      };
    default:
      return state;
  }
};

export default exampleReducer;
