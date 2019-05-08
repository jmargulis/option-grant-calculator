import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import reduxCookiesMiddleware from 'redux-cookies-middleware';
import { getStateFromCookies } from 'redux-cookies-middleware';
import defaultGrant from "./utils/defaultGrant";

let initialState = {
  grants: [defaultGrant()],
  exit: {},
  ui: false
};

// state to persist in cookies
const paths = {
  'grants': { name: 'ogc_grants' },
  'exit': { name: 'ogc_exit' }
};

// read stored data in cookies and merge it with the initial state
initialState = getStateFromCookies(initialState, paths);

// convert any dates appropriately
if(initialState.grants) {
  for (let i = 0; i < initialState.grants.length; i++) {
    initialState.grants[i].strikeDate = new Date(initialState.grants[i].strikeDate);
  }
}
if(initialState.exit && initialState.exit.exitDate) {
  initialState.exit.exitDate = new Date(initialState.exit.exitDate);
}


const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools( applyMiddleware(...middleware, reduxCookiesMiddleware(paths)) )
);

export default store;
