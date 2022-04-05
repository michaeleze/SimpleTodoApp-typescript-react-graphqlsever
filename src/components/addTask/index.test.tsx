import React from 'react';
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AddTask from './index';
import { todoService } from '../../service';
import { Simulate, act } from 'react-dom/test-utils';

jest.mock('../../service');

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

  it('should handleChange task', () => {
    const { getByTestId } = container;
    const input = getByTestId('add-task-text');

    act(() => { Simulate.change(input), { target: { value: 'panda' } }});

    expect(handleChange).toHaveBeenCalled();
  });

  it('should add task', () => {
    const { getByTestId } = container;
    const button = getByTestId('add-button');
    const input = getByTestId('add-task-text');

    act(() => {
       fireEvent.change(input), { target: { value: 'panda' } };
       fireEvent.click(button)
      });

    expect(todoService.addTask).toHaveBeenCalledWith('panda');
  });
});
