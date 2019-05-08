import {UPDATE_EXIT} from '../actions/types';
import exitReducer from './exitReducer';

describe('Redux exitReducer', () => {

  it('updates exit date', () => {
    const initialDate = {
      exit: {
        exitDate: new Date(2020, 0),
        exitValue: '1'
      }
    };

    const actionDate = {
      type: UPDATE_EXIT,
      payload: {
        exitDate: new Date(2020, 1),
        exitValue: '1'
      }
    };

    let resultDate = initialDate;
    resultDate.exit.exitDate = actionDate.payload.exitDate;
    expect(exitReducer(initialDate, actionDate)).toEqual(resultDate);
  });

  it('updates exit value', () => {
    const initialValue = {
      exit: {
        exitDate: new Date(2020, 0),
        exitValue: '1'
      }
    };

    const actionValue = {
      type: UPDATE_EXIT,
      payload: {
        exitDate: new Date(2020, 0),
        exitValue: '2'
      }
    };

    let resultValue = initialValue;
    resultValue.exit.exitValue = actionValue.payload.exitValue;
    expect(exitReducer(initialValue, actionValue)).toEqual(resultValue);
  });

});
