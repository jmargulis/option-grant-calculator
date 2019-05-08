import {FETCH_UI, TOGGLE_EXIT} from '../actions/types';
import uiReducer from './uiReducer';

describe('Redux uiReducer', () => {

  it('fetches UI', () => {
    const initialFetch = false;
    const initialFetch2 = true;
    const actionFetch = {
      type: FETCH_UI,
      payload: null
    };

    let resultFetch = initialFetch;
    expect(uiReducer(initialFetch, actionFetch)).toEqual(resultFetch);

    resultFetch = initialFetch2;
    expect(uiReducer(initialFetch2, actionFetch)).toEqual(resultFetch);
  });

  it('updates UI', () => {
    const initialValue = false;
    const initialValue2 = true;
    const actionValue = {
      type: TOGGLE_EXIT,
      payload: null
    };

    let resultValue = !initialValue;
    expect(uiReducer(initialValue, actionValue)).toEqual(resultValue);

    resultValue = !initialValue2;
    expect(uiReducer(initialValue2, actionValue)).toEqual(resultValue);
  });

});
