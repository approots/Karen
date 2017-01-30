import React from 'react';
import { shallow } from 'enzyme';
import Greeting from './Greeting';

it('renders without crashing', () => {
  shallow(<Greeting />);
});