import React from 'react';
import { shallow } from 'enzyme';
import KarenTextField from './KarenTextField';

it('renders without crashing', () => {
  shallow(<KarenTextField />);
});