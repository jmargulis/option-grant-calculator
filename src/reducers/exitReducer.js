import {FETCH_EXIT, UPDATE_EXIT} from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_EXIT:
      return state;

    case UPDATE_EXIT:
      return action.payload;

    default:
      return state;

  }
}
