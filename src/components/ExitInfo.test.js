import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import ExitInfo from './ExitInfo';

const middleware = [thunk];
const mockStore = configureStore(middleware);

const emptyGrant = {
  sharesGranted: '',
  totalShares: '',
  strikePrice: '',
  strikeDate: new Date()
};
const grant1 = {
  sharesGranted: '10000',
  totalShares: '8000000',
  strikePrice: '0.001',
  strikeDate: new Date(2017, 0)
};
const grant2 = {
  sharesGranted: '1000',
  totalShares: '9000000',
  strikePrice: '0.002',
  strikeDate: new Date(2018, 0)
};
const grant3 = {
  sharesGranted: '10000',
  totalShares: '8000000',
  strikePrice: '0.002',
  strikeDate: new Date(2018, 0)
};
const initialState = {
  grants: [emptyGrant]
};
const initialState1 = {
  grants: [grant1]
};
const initialState2 = {
  grants: [grant2]
};
const initialState3 = {
  grants: [grant1, grant3]
};

const store = mockStore(initialState);
const store1 = mockStore(initialState1);
const store2 = mockStore(initialState2);
const store3 = mockStore(initialState3);

describe('<ExitInfo/>', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><ExitInfo exit={{exitValue: '', exitDate: new Date()}}/></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('receives properties correctly', () => {
    const wrapper = mount(shallow(<Provider store={store1}><ExitInfo exit={{exitValue:'1000', exitDate:new Date()}}/></Provider>).get(0));
    expect(wrapper.find('.strike-price')).toHaveHTML('<input class="form-control strike-price" type="text" value="1000">');

    const wrapper2 = mount(shallow(<Provider store={store1}><ExitInfo exit={{exitValue:'10000', exitDate: new Date()}}/></Provider>).get(0));
    expect(wrapper2.find('.strike-price')).toHaveHTML('<input class="form-control strike-price" type="text" value="10000">');
  });

  it('displays single grant calculations properly', () => {
    const wrapper = mount(shallow(<Provider store={store1}><ExitInfo exit={{exitValue:'100000000', exitDate: new Date(2023, 0)}}/></Provider>).get(0));
    expect(wrapper.find('.exit-percentage').text()).toBe('0.1250%');
    expect(wrapper.find('.exit-value').text()).toBe('$124,990.00');
    expect(wrapper.find('.exit-value-annualized').text()).toBe('$20,831.67');
    expect(wrapper.find('.exit-years').text()).toBe('6');

    const wrapper2 = mount(shallow(<Provider store={store2}><ExitInfo exit={{exitValue:'1000000000', exitDate: new Date(2022, 0)}}/></Provider>).get(0));
    expect(wrapper2.find('.exit-percentage').text()).toBe('0.0111%');
    expect(wrapper2.find('.exit-value').text()).toBe('$111,109.11');
    expect(wrapper2.find('.exit-value-annualized').text()).toBe('$27,777.28');
    expect(wrapper2.find('.exit-years').text()).toBe('4');
  });

  it('displays multiple grant calculations properly', () => {
    const wrapper = mount(shallow(<Provider store={store3}><ExitInfo exit={{exitValue:'100000000', exitDate: new Date(2023, 0)}}/></Provider>).get(0));
    expect(wrapper.find('.exit-percentage').text()).toBe('0.2500%');
    expect(wrapper.find('.exit-value').text()).toBe('$249,970.00');
    expect(wrapper.find('.exit-value-annualized').text()).toBe('$41,661.67');
    expect(wrapper.find('.exit-years').text()).toBe('6');
  });

});
