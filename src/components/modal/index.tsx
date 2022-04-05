import ReactModal from 'react-modal';
import React, { useState } from 'react';
import { IModal } from './index.interface';
import './index.css';

const Modal: React.FC<IModal> = (props) => {
  const [value, setValue] = useState<string>();
  const {
    handleCloseModal,
    handleUpdateTask,
    modalItem,
    isOpen,
  } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleOnAfterOpen = () => {
    setValue(modalItem.text);
  };

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      onAfterOpen={handleOnAfterOpen}
    >
      <table className="modal-content">
        <tbody>
          <tr>
            <td className='modal-text'>
              <textarea className="modal-input--field" onChange={handleOnChange} value={value} data-testid="modal-input" />
            </td>
            <td>
              <div className='modal-options'>
                <button
                  className="button-accept"
                  onClick={() => handleUpdateTask({ id: modalItem?.id, task: value })}
                  data-testid="button-accept"
                >
                  Accept
                </button>
                <button className="button-reject" onClick={handleCloseModal} data-testid="button-reject"> Cancel </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </ReactModal>
  )
}

export default Modal;
