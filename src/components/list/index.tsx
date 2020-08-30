import React, {useState} from 'react';
import './index.css';
import Option from "../option";
import { IList } from './index.interface';

const List: React.FC<IList> = (props) => {
    const [ taskId ] = useState<string>("2");
    //const [ value, setValue ] = useState<string>("xmce0tvpw");
    const {
        options,
        list
    } = props;
    const { handleChange, id, text } = list;

    // React.useEffect(() => {
    //     setValue(text);
    // },[])
    //
    // // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // //     const text = event.target.value;
    // //     console.log( event.target.value)
    // //     setValue(text);
    // // };

    return (
        <div className="list--container">
            <div className="list-item-field">
                <input
                    disabled={id !== taskId}
                    className="list-item__text--input"
                    value={text}
                    onChange={handleChange}
                />
            </div>
            <div className="list-item--edit">
                <Option {...options} />
            </div>
        </div>
    );
};

export default List;