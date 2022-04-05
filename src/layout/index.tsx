import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
} from 'react';
import './index.css';
import { todoService } from '../service';
import AddTask from "../components/addTask";
import Modal from "../components/modal";

const ListItem = lazy(() => import('../components/ListItem'));

const Layout: React.FC = () => {
  const [list, updateList] = useState<Array<{ id: string, text: string }>>([]);
  const [task, addTask] = useState<string>(null as unknown as string);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalItem, setmodalItem] = useState<any>();

  useEffect(() => {
    getTaskList();
  }, [updateList]);

  const getTaskList = () => {
    todoService.getTaskList();
    todoService.subscribe((data: any) => {
      updateList(data);
    });

    todoService.unsubscribe(() => {
      return null
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    addTask(text);
  };

  const handleCreateNewTask = () => {
    todoService.addTask(task);
    addTask('');
  };

  const handleUpdateTask = (value: any) => {
    todoService.updateTask(value.id, value.task);
    handleCloseModal();
    addTask('');
  };

  const handleDeleteTask = (id: string, text: string) => {
    todoService.deleteTask(id, text);
  };

  const handleOpenModal = (id: string) => {
    setIsOpen(true)
    const item = list.find((item: any) => item.id === id)
    setmodalItem(item);
  };

  const handleCloseModal = () => {
    setIsOpen(false)
  };

  return (
    <div className='wrapper'>
      <div className="layout-container" data-testid="layout">
        <Modal
          handleCloseModal={handleCloseModal}
          handleUpdateTask={handleUpdateTask}
          modalItem={modalItem}
          isOpen={isOpen}
        />
        <div className="layout-add">
          <AddTask handleChange={handleChange} handleCreateNewTask={handleCreateNewTask} />
        </div>
        <div className="layout-list" data-testid="todo-list">
          <Suspense fallback={<div>Loading List...</div>}>
            <ListItem
              handleDeleteTask={handleDeleteTask}
              handleOpenModal={handleOpenModal}
              list={list}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
};

export default React.memo(Layout);
