import 'jest-enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

global.findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};
