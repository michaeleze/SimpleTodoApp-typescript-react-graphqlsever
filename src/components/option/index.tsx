import React from 'react';
import './index.css';
import { IOption } from './index.interface';

const Option: React.FC<IOption> = (props) => {
    const { handles, id,  label } = props;
    const { handleEdit, handleDelete } = handles;
    const { edit, remove } = label;

    return (
        <>
            <button className="option--edit" onClick={() => handleEdit(id)}>
                {edit}
            </button>
            <button className="option--delete" onClick={() => handleDelete(id)}>
                {remove}
            </button>
        </>
    );
}

export default Option;