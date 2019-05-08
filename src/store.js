import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import defaultGrant from './utils/defaultGrant';

const initialState = {
  grants: [],
  exit: {}
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools( applyMiddleware(...middleware) )
);

export default store;
