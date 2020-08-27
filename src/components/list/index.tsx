import React from 'react';
import './index.css';
import Option from "../option";

const optionLabel = {
    edit: 'edit',
    delete: 'delete',
};


const List: React.FC<any> = (props) => {
    console.log(props);

    return (
        <div className="list--container">
            <div className="list-item--text">
                list
            </div>
            <div className="list-item--edit">
                <Option label={optionLabel}/>
            </div>
        </div>
    );
};

export default List;