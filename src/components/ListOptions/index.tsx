import React from 'react';
import './index.css';
import { IListOptions } from './index.interface';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const ListOptions: React.FC<IListOptions> = (props) => {
  const {
    handleDeleteTask,
    handleOpenModal,
    id,
    text,
  } = props;

  return (
    <div className="options-wrapper" data-testid="options-wrapper">
      <button className="option--edit" onClick={() => handleOpenModal(id)} data-testid="options-edit">
        <FaEdit />
      </button>
      <button className="option--delete" onClick={() => handleDeleteTask(id, text)} data-testid="options-delete">
        <MdDelete />
      </button>
    </div>
  );
}

export default ListOptions;
