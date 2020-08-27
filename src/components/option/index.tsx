import React from 'react';
import './index.css';
import { IOption } from './index.interface';

const Option: React.FC<IOption> = (props) => {
    const { handles, label } = props;
    const { handleEdit, handleDelete } = handles;
    const { edit, remove } = label;

    return (
        <>
            <button className="option--edit" onClick={handleEdit}>
                {edit}
            </button>
            <button className="option--delete" onClick={handleDelete}>
                {remove}
            </button>
        </>
    );
}

export default Option;