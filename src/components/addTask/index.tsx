import React from 'react';
import './index.css';
import { IAddTask } from './index.interface';
import { FaPlus } from "react-icons/fa";

const AddTask: React.FC<IAddTask> = (props) => {
  const {
    handleChange,
    handleCreateNewTask,
  } = props;

  return (
    <table className="add-container" data-testid='add-task'>
      <tr>
        <td className="add-input">
          <textarea
            className="add-input--field"
            onChange={handleChange}
            placeholder='Add new task'
            data-testid='add-task-text'
          />
        </td>
        <td>
          <button
            className="add-button"
            onClick={handleCreateNewTask}
            data-testid='add-button'
          >
            <FaPlus />
          </button>
        </td>
      </tr>
    </table>
  );
};

export default AddTask;
