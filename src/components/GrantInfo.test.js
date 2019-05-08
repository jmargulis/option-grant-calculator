import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import GrantInfo from './GrantInfo';

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
const initialState = {
  grants: [emptyGrant]
};

const store = mockStore(initialState);

describe('<GrantInfo/>', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><GrantInfo grant={emptyGrant} canDelete={false}/></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('shows Remove button when appropriate', () => {
    const wrapperNoDelete = mount(shallow(<Provider store={store}><GrantInfo grant={emptyGrant} canDelete={false}/></Provider>).get(0));
    expect(wrapperNoDelete.find('button.btn.btn-danger.btn-sm.d-none').length).toBe(1);

    const wrapperDelete = mount(shallow(<Provider store={store}><GrantInfo grant={emptyGrant} canDelete={true}/></Provider>).get(0));
    expect(wrapperDelete.find('button.btn.btn-danger.btn-sm.d-none').length).toBe(0);
  });

  it('receives properties correctly', () => {
    const wrapper = mount(shallow(<Provider store={store}><GrantInfo grant={grant1}/></Provider>).get(0));
    expect(wrapper.find('.shares-granted')).toHaveHTML('<input class="form-control shares-granted" type="text" value="10000">');
    expect(wrapper.find('.total-shares')).toHaveHTML('<input class="form-control total-shares" type="text" value="8000000">');
    expect(wrapper.find('.strike-price')).toHaveHTML('<input class="form-control strike-price" type="text" value="0.001">');

    const wrapper2 = mount(shallow(<Provider store={store}><GrantInfo grant={grant2}/></Provider>).get(0));
    expect(wrapper2.find('.shares-granted')).toHaveHTML('<input class="form-control shares-granted" type="text" value="1000">');
    expect(wrapper2.find('.total-shares')).toHaveHTML('<input class="form-control total-shares" type="text" value="9000000">');
    expect(wrapper2.find('.strike-price')).toHaveHTML('<input class="form-control strike-price" type="text" value="0.002">');
  });

  it('displays calculations properly', () => {
    const wrapper = mount(shallow(<Provider store={store}><GrantInfo  grant={grant1}/></Provider>).get(0));
    expect(wrapper.find('.grant-percent').text()).toBe('0.1250%');
    expect(wrapper.find('.grant-value').text()).toBe('$10.00');
    expect(wrapper.find('.total-value').text()).toBe('$8,000.00');

    const wrapper2 = mount(shallow(<Provider store={store}><GrantInfo  grant={grant2}/></Provider>).get(0));
    expect(wrapper2.find('.grant-percent').text()).toBe('0.0111%');
    expect(wrapper2.find('.grant-value').text()).toBe('$2.00');
    expect(wrapper2.find('.total-value').text()).toBe('$18,000.00');
  });

});
