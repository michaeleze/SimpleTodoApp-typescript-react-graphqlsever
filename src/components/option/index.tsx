import React from 'react';
import './index.css';
import { IOption } from './index.interface';
import {FaPlus} from "react-icons/fa";

const Option: React.FC<IOption> = (props) => {
    const { handleUpdateTask, handleDeleteTask, id } = props;

    return (
        <>
            <button className="option--edit" onClick={() => handleUpdateTask(id)}>
                <FaPlus />
            </button>
            <button className="option--delete" onClick={() => handleDeleteTask(id)}>
                <FaPlus />
            </button>
        </>
    );
}

export default Option;