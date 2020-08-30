import ReactModal from 'react-modal';
import React from 'react';
import { IModal } from './index.interface';

const Modal: React.FC<IModal> = (props) => {
    const {
        handleChange,
        handleCloseModal,
        handleUpdateTask,
        item,
        modal,
    } = props;

    return (
        <ReactModal
            ariaHideApp={false}
            isOpen={modal}
            contentLabel="Minimal Modal Example"
        >
            <div className="modal-content">
                <input onChange={handleChange} value={item?.text && item?.text} />
                <span onClick={() => item?.id && handleUpdateTask(item.id)}> Accept </span>
                <span onClick={handleCloseModal}> Cancel </span>
            </div>
        </ReactModal>
    )
}

export default Modal;