import { FETCH_GRANTS, ADD_GRANT, UPDATE_GRANT, REMOVE_GRANT } from './types';
import defaultGrant from '../utils/defaultGrant';

export const fetchGrants = () => dispatch => {
  // TODO: look at cookies for existing grants stored
  dispatch({
    type: FETCH_GRANTS,
    payload: [{
      sharesGranted: '10000',
      totalShares: '8000000',
      strikePrice: '0.001',
      strikeDate: new Date(2017, 0)
    },{
    sharesGranted: '5000',
    totalShares: '8000000',
    strikePrice: '0.002',
    strikeDate: new Date(2018, 0)
  }]
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
