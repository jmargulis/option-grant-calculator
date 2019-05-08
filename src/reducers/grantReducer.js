import {FETCH_GRANTS, ADD_GRANT, UPDATE_GRANTS, REMOVE_GRANT} from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_GRANTS:
      return Object.assign({}, state, {
        grants: action.payload
      });

    case UPDATE_GRANTS:
      return {
        ...state
      };

    case ADD_GRANT:
      return {
        ...state,
        ...state.grants.push(action.payload)
      };

    case REMOVE_GRANT:
      let newGrants = state.grants;
      newGrants.splice(action.payload, 1);
      return {
        ...state,
        grants: newGrants
      };

  }

  return state;
}
