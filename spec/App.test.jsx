import React from 'react';
import { mount } from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('Checks if App renders', () => {
  test('App component mounts', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toExist();
  });
});