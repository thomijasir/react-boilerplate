import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomeContainer from './Home.container';

let wrapper;
// let instance;

beforeEach(() => {
  wrapper = shallow(<HomeContainer />, {
    disableLifecycleMethods: false,
  });
  // instance = wrapper.instance();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Home Snap Test', () => {
  describe('render()', () => {
    test('renders the component', () => {
      wrapper = shallow(<HomeContainer />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
