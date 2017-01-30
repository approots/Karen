import React from 'react';
import { shallow } from 'enzyme';
import BarChart from './BarChart';

it('renders without crashing', () => {
  shallow(<BarChart />);
});