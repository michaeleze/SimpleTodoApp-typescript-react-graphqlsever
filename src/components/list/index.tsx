import React from "react";
import ListItem from '../listItem';
import {IList} from './index.interface';

const List: React.FC<IList> = (props) => {
  const {
    handleDeleteTask,
    handleOpenModal,
    list
  } = props;

  const mappedItem = (item: any) => {
    const options = {
      handleDeleteTask,
      handleOpenModal: handleOpenModal,
      id: item?.id,
      text: item?.text,
    };

    return (
      <>
        {
          options.id &&
          <div key={options.text}>
            <ListItem options={options}/>
          </div>
        }
      </>
    )
  }

  return list?.map(mappedItem)
}

export default List;
