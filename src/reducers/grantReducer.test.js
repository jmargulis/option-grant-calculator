import {FETCH_GRANTS, ADD_GRANT, UPDATE_GRANTS, REMOVE_GRANT} from '../actions/types';
import grantReducer from './grantReducer';
import defaultGrant from "../utils/defaultGrant";

describe('Redux grantReducer', () => {

  it('fetches grants', () => {
    const initialFetch = {
      grants: []
    };
    const actionFetch = {
      type: FETCH_GRANTS,
      payload: [defaultGrant()]
    };

    let resultFetch = initialFetch;
    resultFetch.grants = actionFetch.payload;
    expect(grantReducer(initialFetch, actionFetch)).toEqual(resultFetch);
  });

  it('adds grant', () => {
    const initialAdd = {
      grants: []
    };
    const actionAdd = {
      type: ADD_GRANT,
      payload: defaultGrant()
    };

    let resultAdd = initialAdd;
    resultAdd.grants.push(actionAdd.payload);
    expect(grantReducer(initialAdd, actionAdd)).toEqual(resultAdd);
  });

  it('update grants', () => {
    const initialUpdate = {
      grants: [defaultGrant()]
    };
    const actionUpdate = {
      type: UPDATE_GRANTS,
      payload: [{
        sharesGranted: '10000',
        totalShares: '8000000',
        strikePrice: '0.001',
        strikeDate: new Date(2017, 0)
      }]
    };

    let resultUpdate = initialUpdate;
    resultUpdate.grants = actionUpdate.payload;
    expect(grantReducer(initialUpdate, actionUpdate)).toEqual(resultUpdate);
  });

  it('remove grant', () => {
    const initialRemove = {
      grants: [{
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
    };
    const actionRemove = {
      type: REMOVE_GRANT,
      payload: 1
    };

    let resultRemove = {
      grants: [{
        sharesGranted: '10000',
        totalShares: '8000000',
        strikePrice: '0.001',
        strikeDate: new Date(2017, 0)
      }]
    };
    expect(grantReducer(initialRemove, actionRemove)).toEqual(resultRemove);

  });

});
