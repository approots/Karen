import React from 'react';
import { shallow } from 'enzyme';
import KarenButtons from './KarenButtons';

it('renders without crashing', () => {
  shallow(<KarenButtons />);
});