import {UPDATE_EXIT} from '../actions/types';
import exitReducer from './exitReducer';

describe('Redux exitReducer', () => {

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
