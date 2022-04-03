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
    modal,
  } = props;

  const newTask = { id: modalItem?.id, task: value };

  const Change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleOnAfterOpen = () => {
    setValue(modalItem.text);
  };

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={modal}
      onAfterOpen={handleOnAfterOpen}
    >
      <table className="modal-content">
        <tr>
          <td className='modal-text'>
            <textarea className="modal-input--field" onChange={Change} value={value} />
          </td>
          <td>
            <div className='modal-options'>
              <button className="button-accept" onClick={() => handleUpdateTask(newTask)} data-testid="button-accept"> Accept </button>
              <button className="button-reject" onClick={handleCloseModal} data-testid="button-reject"> Cancel </button>
            </div>
          </td>
        </tr>
      </table>
    </ReactModal>
  )
}

export default Modal;
