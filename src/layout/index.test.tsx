import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Layout from './index';
import { todoService } from '../service';

describe('Layout component', () => {
  it('should renders snapshot', () => {
    const { container } = render(<Layout />)
    expect(container).toMatchSnapshot();
  });

  it('should renders layout component', () => {
    const { getByTestId } = render(<Layout />)
    expect(getByTestId('layout')).toBeInTheDocument();
  });
});
