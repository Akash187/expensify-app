import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/Header';

describe("<Header /> Component", () => {
  test('should render Header correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
  });
});





//SnapShot Testing
//import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
// import Header from '../../components/Header';
//
// test('should render Header correctly', () => {
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header/>);
//   expect(renderer.getRenderOutput()).toMatchSnapshot()
// });
