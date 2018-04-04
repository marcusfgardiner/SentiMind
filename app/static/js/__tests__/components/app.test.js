import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('app', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('renders a Wrapper component', () => {
    expect(app.find('Wrapper').exists()).toBe(true)
  })
});
