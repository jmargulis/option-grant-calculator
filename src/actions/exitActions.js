import { UPDATE_EXIT } from './types';

export const updateExit = exitData => dispatch => {
  dispatch({
    type: UPDATE_EXIT,
    payload: exitData
  });
};
