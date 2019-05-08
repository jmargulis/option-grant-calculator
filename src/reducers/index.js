import { combineReducers } from 'redux';
import grantReducer from './grantReducer';
import exitReducer from './exitReducer';

export default combineReducers({
  grants: grantReducer,
  exit: exitReducer
});
