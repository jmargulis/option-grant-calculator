import {FETCH_EXIT, UPDATE_EXIT} from '../actions/types';
import exitReducer from './exitReducer';

describe('Redux exitReducer', () => {

  it('fetches exit data', () => {
    const initialExit = {
      exitDate: new Date(2020, 0),
      exitValue: '1000000000'
    };
    const actionExit = {
      type: FETCH_EXIT,
      payload: null
    };

    let resultExit = initialExit;
    expect(exitReducer(initialExit, actionExit)).toEqual(resultExit);
  });

  it('updates exit date', () => {
    const initialDate = {
      exitDate: new Date(2020, 0),
      exitValue: '1'
    };
    const actionDate = {
      type: UPDATE_EXIT,
      payload: {
        exitDate: new Date(2020, 1),
        exitValue: '1'
      }
    };

    let resultDate = initialDate;
    resultDate.exitDate = actionDate.payload.exitDate;
    expect(exitReducer(initialDate, actionDate)).toEqual(resultDate);
  });

  it('updates exit value', () => {
    const initialValue = {
      exitDate: new Date(2020, 0),
      exitValue: '1'
    };
    const actionValue = {
      type: UPDATE_EXIT,
      payload: {
        exitDate: new Date(2020, 0),
        exitValue: '2'
      }
    };

    let resultValue = initialValue;
    resultValue.exitValue = actionValue.payload.exitValue;
    expect(exitReducer(initialValue, actionValue)).toEqual(resultValue);
  });

});
