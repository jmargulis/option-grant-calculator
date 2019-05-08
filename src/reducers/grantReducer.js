import {FETCH_GRANTS, ADD_GRANT, UPDATE_GRANT, REMOVE_GRANT} from '../actions/types';

const initialGrants = [];

export default function (state = initialGrants, action) {
  let newState = state.slice(0);

  switch (action.type) {

    case FETCH_GRANTS:
      return state;

    case UPDATE_GRANT:
      newState[action.payload.id].sharesGranted = action.payload.sharesGranted;
      newState[action.payload.id].totalShares = action.payload.totalShares;
      newState[action.payload.id].strikePrice = action.payload.strikePrice;
      newState[action.payload.id].strikeDate = action.payload.strikeDate;
      return newState;

    case ADD_GRANT:
      newState.push(action.payload);
      return newState;

    case REMOVE_GRANT:
      newState.splice(action.payload, 1);
      return newState;

    default:
      return state;

  }
}
