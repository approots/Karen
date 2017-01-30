import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from './SubmitButton';

it('renders without crashing', () => {
  shallow(<SubmitButton />);
});