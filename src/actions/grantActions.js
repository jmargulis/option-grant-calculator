import { FETCH_GRANTS, ADD_GRANT, UPDATE_GRANT, REMOVE_GRANT } from './types';
import defaultGrant from '../utils/defaultGrant';

export const fetchGrants = () => dispatch => {
  // TODO: look at cookies for existing grants stored
  dispatch({
    type: FETCH_GRANTS,
    payload: [defaultGrant()]
  })
}

export const addGrant = () => dispatch => {
  dispatch({
    type: ADD_GRANT,
    payload: defaultGrant()
  });
};

export const updateGrant = grantData => dispatch => {
  dispatch({
    type: UPDATE_GRANT,
    payload: grantData
  });
};

export const removeGrant = grantID => dispatch => {
  dispatch({
    type: REMOVE_GRANT,
    payload: grantID
  });
};
