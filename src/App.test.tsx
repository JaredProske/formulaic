import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without errors', () => {
  const output = render(<App />);

  expect(output).toBeTruthy();
});
