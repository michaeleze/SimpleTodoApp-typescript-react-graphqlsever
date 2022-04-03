import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';

it('should renders snapshot', () => {
  const {container} = render(<App />)
  expect(container).toMatchSnapshot();
});
