import React from 'react';
import './index.css';
import { IOption } from './index.interface';

const Option: React.FC<IOption> = (props) => {
    const { handleDelete, handleEdit, label } = props;

    return (
        <>
            <button className="option--edit" onClick={handleEdit}>
                {label.edit}
            </button>
            <button className="option--delete" onClick={handleDelete}>
                {label.delete}
            </button>
        </>
    );
}

export default Option;