import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from './index';
import { act, Simulate } from 'react-dom/test-utils';

describe('Modal component', () => {
  let container: RenderResult<typeof import("@testing-library/dom/types/queries")>;
  const handleCloseModal = jest.fn();
  const handleUpdateTask = jest.fn();
  const handleOnChange = jest.fn();

  beforeEach(() => {
    container = render(
      <Modal
        handleCloseModal={handleCloseModal}
        handleUpdateTask={handleUpdateTask}
        modalItem={{ text: 'hello' }}
        isOpen={true}
      />
    );
  });

  afterEach(cleanup);

  it('should renders snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('should renders modal component', () => {
    const { getByText } = container;

    expect(getByText('hello')).toBeInTheDocument();
  });

  it('should renders input', () => {
    const { getByTestId } = container;

    expect(getByTestId("modal-input")).toHaveValue('hello');
  });

  it('should renders accept button', () => {
    const { getByTestId } = container;

    expect(getByTestId("button-accept")).toBeInTheDocument();
  });

  xit('should handle onChange', () => {
    const { getByTestId } = container;

    act(() => {
      Simulate.change(getByTestId("modal-input"), { target: { value: Event } });
  })

  expect(handleOnChange).toHaveBeenCalled();
});

});
