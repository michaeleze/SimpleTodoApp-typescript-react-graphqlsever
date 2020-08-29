import React from 'react';
import './index.css';
import Option from "../option";
import { IList } from './index.interface';

const List: React.FC<IList> = (props) => {
    const {
        options,
        list
    } = props;
    const { enableEdit, handleEditTask, id, text } = list;

    return (
        <div className="list--container">
            <div className="list-item-field">
                <input
                    disabled={enableEdit}
                    className="list-item__text--input"
                    value={text}
                    onChange={() => handleEditTask(id)}
                />
            </div>
            <div className="list-item--edit">
                <Option {...options} />
            </div>
        </div>
    );
};

export default List;