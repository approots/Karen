import React from 'react';
import { shallow } from 'enzyme';
import KarenForm from './KarenForm';

describe('KarenForm', () => {
  test('renders without crashing', () => {
    shallow(<KarenForm />);
  });
})
