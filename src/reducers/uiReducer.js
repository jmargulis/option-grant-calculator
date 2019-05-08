import {FETCH_UI, TOGGLE_EXIT} from '../actions/types';

const initialState = false;

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_UI:
      return state;

    case TOGGLE_EXIT:
      return !state;

    default:
      return state;

  }
}
