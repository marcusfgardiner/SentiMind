import React from 'react';
import { shallow } from 'enzyme';
import app from '../../components/app';

describe('app', () => {
  const app = shallow(<app />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('renders a Header component', () => {
    expect(app.find('Header').exists()).toBe(true)
  })
});
