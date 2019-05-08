import { FETCH_UI, TOGGLE_EXIT } from './types';

export const fetchUI = () => dispatch => {
  dispatch({
    type: FETCH_UI,
    payload: null
  })
}

export const toggleExit = () => dispatch => {
  dispatch({
    type: TOGGLE_EXIT,
    payload: null
  });
};
