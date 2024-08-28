import { Dispatch } from 'redux';
import { fetchData } from '../../api/getApi';
import { ExampleActionTypes } from '../../types/exampleActionTypes'; // Correct import path
// Correct import path

// Action Creators
export const setData = (type: any, data: any) => ({
  type: type,
  payload: data,
});

export const fetchDataFailure = (error: string) => ({
  type: ExampleActionTypes.FETCH_DATA_FAILURE as const,
  payload: error,
});

export const fetchNewsList = () => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await fetchData();
      await dispatch(setData(ExampleActionTypes.SET_DATA, { list: data, load: true }));
    } catch (error: any) {
      await dispatch(setData(ExampleActionTypes.SET_DATA, { list: [], load: true }));
      dispatch(fetchDataFailure(error.message || 'Unknown error occurred'));
    }
  };
};

