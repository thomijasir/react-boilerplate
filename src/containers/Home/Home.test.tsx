import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomeContainer from './Home.container';
import HomePage, { Props } from './Home.page';

const defaultProps: Props = {
  intl: {
    formatMessage: jest.fn(),
  },
};

let wrapper: any;
// let instance;

beforeEach(() => {
  wrapper = shallow<Props>(<HomePage {...defaultProps} />, {
    disableLifecycleMethods: false,
  });
  // instance = wrapper.instance();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Home Page Snap Test', () => {
  describe('render()', () => {
    test('renders the home page', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

describe('Home Container Snap Test', () => {
  describe('render()', () => {
    test('renders the home container', () => {
      const cWrapper = shallow(<HomeContainer {...defaultProps} />);
      expect(toJson(cWrapper)).toMatchSnapshot();
    });
  });
});
