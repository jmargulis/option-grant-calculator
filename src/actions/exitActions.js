import { FETCH_EXIT, UPDATE_EXIT } from './types';

export const fetchExit = () => dispatch => {
  dispatch({
    type: FETCH_EXIT,
    payload: null
  });
};

export const updateExit = exitData => dispatch => {
  dispatch({
    type: UPDATE_EXIT,
    payload: exitData
  });
};
