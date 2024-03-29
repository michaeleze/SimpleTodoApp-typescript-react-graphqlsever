import React from 'react';
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AddTask from './index';
import { Simulate, act } from 'react-dom/test-utils';

describe('AddTask component', () => {
  const handleChange = jest.fn();
  const handleCreateNewTask = jest.fn();
  let container: RenderResult<typeof import("@testing-library/dom/types/queries")>;

  beforeEach(() => {
    container = render(<AddTask handleChange={handleChange} handleCreateNewTask={handleCreateNewTask
    } />)
  });

  afterEach(() => cleanup);

  it('should renders AddTask component', () => {
    const { getByTestId } = container;
    expect(getByTestId('add-button')).toBeInTheDocument();
  });

  it('should render input', () => {
    const { getByTestId } = container;
    const input = getByTestId('add-task-text');

    expect(input).toBeInTheDocument();
  });

  it('should handleChange task', async () => {
    const { getByTestId } = container;
    const input = getByTestId('add-task-text');

    Simulate.change(input), {
      target: { value: 'panda' }
    }

    expect(handleChange).toHaveBeenCalled();
  });

  it('should add task', async () => {
    const { getByTestId } = container;
    const button = getByTestId('add-button');

    act(() => {
      fireEvent.click(button)
    });

    expect(handleCreateNewTask).toHaveBeenCalled();
  });
});
