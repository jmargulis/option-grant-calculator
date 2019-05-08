import {FETCH_GRANTS, ADD_GRANT, UPDATE_GRANT, REMOVE_GRANT} from '../actions/types';
import grantReducer from './grantReducer';
import defaultGrant from "../utils/defaultGrant";

describe('Redux grantReducer', () => {

  it('fetches grants', () => {
    const initialFetch = [];
    const actionFetch = {
      type: FETCH_GRANTS,
      payload: [defaultGrant()]
    };

    let resultFetch = actionFetch.payload;
    expect(grantReducer(initialFetch, actionFetch)).toEqual(resultFetch);
  });

  it('adds grant', () => {
    const initialAdd = [];
    const actionAdd = {
      type: ADD_GRANT,
      payload: defaultGrant()
    };

    let resultAdd = [actionAdd.payload];
    expect(grantReducer(initialAdd, actionAdd)).toEqual(resultAdd);
  });

  it('update grant', () => {
    const initialUpdate = [defaultGrant()];
    const actionUpdate = {
      type: UPDATE_GRANT,
      payload: {
        id: 0,
        sharesGranted: '10000',
        totalShares: '8000000',
        strikePrice: '0.001',
        strikeDate: new Date(2017, 0)
      }
    };

    let resultUpdate = [{
      sharesGranted: '10000',
      totalShares: '8000000',
      strikePrice: '0.001',
      strikeDate: new Date(2017, 0)
    }];
    expect(grantReducer(initialUpdate, actionUpdate)).toEqual(resultUpdate);
  });

  it('remove grant', () => {
    const initialRemove = [{
      sharesGranted: '10000',
      totalShares: '8000000',
      strikePrice: '0.001',
      strikeDate: new Date(2017, 0)
    }, {
      sharesGranted: '5000',
      totalShares: '8000000',
      strikePrice: '0.002',
      strikeDate: new Date(2018, 0)
    }];
    const actionRemove = {
      type: REMOVE_GRANT,
      payload: 1
    };

    let resultRemove = [{
      sharesGranted: '10000',
      totalShares: '8000000',
      strikePrice: '0.001',
      strikeDate: new Date(2017, 0)
    }];
    expect(grantReducer(initialRemove, actionRemove)).toEqual(resultRemove);

  });

});
