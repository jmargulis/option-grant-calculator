import {UPDATE_EXIT} from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {

    case UPDATE_EXIT:
      return action.payload;

    default:
      return state;

  }
}
