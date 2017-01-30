import React from 'react';
import { shallow } from 'enzyme';
import ResetButton from './ResetButton';

it('renders without crashing', () => {
  shallow(<ResetButton />);
});