import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import MainPage from './MainPage';
import icon from './avatar1.jpg';
import six from './6.jpg';




  it('renders children when passed in', () => {
    const wrap = shallow(<MainPage />);
    expect(wrap.find('div').length).toBe(23);
  });

  it('renders children when passed in', () => {
    const wrap = shallow( <MainPage/>);
  expect(wrap.contains(<img id="myImg6" src = {six} alt="six" className="hover-shadow cursor" />)).toEqual(true);
  });
  

