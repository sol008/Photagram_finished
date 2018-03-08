import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import LoginPage from './LoginPage';
import icon from './avatar1.jpg';



describe('LoginPage via Enzyme', () => {
  const wrapper = shallow(<LoginPage />);
  it('renders label', () => {
    expect(wrapper.find('#111').text()).toEqual('Remember me');
  });

  it('renders children when passed in', () => {
    const wrap = shallow(<LoginPage />);
    expect(wrap.find('div').length).toBe(4);
  });

  it('renders children when passed in', () => {
    const wrap = shallow( <LoginPage/>);
    expect(wrap.contains(<div className="imgcontainer">
    <img id="logicon" src={icon} alt="icon" />
  </div>)).toEqual(true);
  });
  
});
