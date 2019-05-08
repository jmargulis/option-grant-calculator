import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

const middleware = [thunk];
const mockStore = configureStore(middleware);

const emptyGrant = {
  sharesGranted: '',
  totalShares: '',
  strikePrice: '',
  strikeDate: new Date()
};
const initialState = {
  grants: emptyGrant
};

const store = mockStore(initialState);

describe('<App/>', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App/></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
