import { combineReducers } from 'redux';
import grantReducer from './grantReducer';
import exitReducer from './exitReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  grants: grantReducer,
  exit: exitReducer,
  ui: uiReducer
});
