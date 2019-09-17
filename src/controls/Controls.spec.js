// Test away!
import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';

import Controls from '../controls/Controls';

test('Controls renders without crashing', () => {
  render(<Controls />);
})