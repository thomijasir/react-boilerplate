// import React from 'react';
// import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
// import HomeContainer from './Home.container';
// import HomePage, { Props } from './Home.page';

// const defaultProps = {
//   intl: { formatMessage: jest.fn() },
// };

// let wrapper;
// let instance;

// beforeEach(() => {
//   const sHomePage = <HomePage {...defaultProps} />;
//   wrapper = shallow<Props>(sHomePage, {
//     disableLifecycleMethods: false,
//   });
// instance = wrapper.instance();
// });

// afterEach(() => {
//   jest.clearAllMocks();
// });

// describe('Home Page Snap Test', () => {
//   describe('render()', () => {
//     test('renders the component', () => {
//       wrapper = shallow(<HomePage {...props} />);
//       expect(toJson(wrapper)).toMatchSnapshot();
//     });
//   });
// });

// describe('Home Container Snap Test', () => {
//   describe('render()', () => {
//     test('renders the component', () => {
//       const cWrapper = shallow(<HomeContainer />).dive();
//       // const cWrapper = shallow(<HomeContainer />);
//       expect(toJson(cWrapper)).toMatchSnapshot();
//     });
//   });
// });
