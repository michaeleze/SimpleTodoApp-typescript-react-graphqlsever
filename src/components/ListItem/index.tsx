import React from "react";
import { IListItem } from './index.interface';
import ListOptions from '../ListOptions';
import './index.css';

const ListItem: React.FC<any> = (props) => {
  const {
    handleDeleteTask,
    handleOpenModal,
    list
  } = props;

  const mappedItem = (item: { id: string; text: string }) => {
    const options = {
      handleDeleteTask,
      handleOpenModal,
      text: item?.text,
      id: item?.id
    };

    return (
      <>
        {
          item?.id &&
          <div key={item?.text}>
            <table className="list-container">
              <tbody>
                <tr>
                  <td className="list-text">
                    <p>{item?.text}</p>
                  </td>
                  <td>
                    <ListOptions {...options} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      </>
    )
  }

  return list?.map(mappedItem)
}

export default ListItem;
