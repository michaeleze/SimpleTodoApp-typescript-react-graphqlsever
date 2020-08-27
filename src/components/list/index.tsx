import React from 'react';
import './index.css';
import Option from "../option";
import { IList } from './index.interface';

const List: React.FC<IList> = (props) => {
    const {
        options,
        list
    } = props;

    return (
        <div className="list--container">
            <div className="list-item--text">
                {list}
            </div>
            <div className="list-item--edit">
                <Option {...options} />
            </div>
        </div>
    );
};

export default List;