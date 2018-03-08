import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import NewPasswordPage from './NewPasswordPage';
import sinon from 'sinon';


describe('NewPasswordPage via Enzyme', () => {
  const wrapper = shallow(<NewPasswordPage />);
  it('renders h1', () => {
    expect(wrapper.find('h1').text()).toEqual('Photagram');
  });


  it('simulates ckick events', () =>{
 
  	const wrap = shallow(<NewPasswordPage />);
    wrap.find(NewPasswordPage).at('#b1').simulate('click');
    const show = wrap.find(NewPasswordPage).at('#d');
    expect(show != null);

  });
  
});
