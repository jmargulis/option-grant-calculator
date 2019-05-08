import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Actions from './Actions';

const middleware = [thunk];
const mockStore = configureStore(middleware);

const initialState = {
  ui: false
};
const initialState1 = {
  ui: true
};

const store = mockStore(initialState);
const store1 = mockStore(initialState1);

describe('<Actions/>', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><Actions/></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('receives properties correctly', () => {
    const wrapper = mount(shallow(<Provider store={store}><Actions/></Provider>).get(0));
    expect(wrapper.find('.btn.btn-primary').text()).toBe('Calculate Exit Value >');

    const wrapper2 = mount(shallow(<Provider store={store1}><Actions/></Provider>).get(0));
    expect(wrapper2.find('.btn.btn-primary').text()).toBe('< Back');
  });

});
