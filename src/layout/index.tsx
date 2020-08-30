import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
} from 'react';
import './index.css';
import {todo} from "../service";
import AddTask from "../components/addTask";
import Modal from "../components/modal";

const ListTemplate = lazy(() => import('../components/list'));

const Layout: React.FC = () => {
  const [list, updateList] = useState<Array<{ id: string, text: string }>>([]);
  const [task, addTask] = useState<string>(null as unknown as string);
  const [modal, showModal] = useState<boolean>(false);
  const [modalItem, setmodalItem] = useState<any>();

  useEffect(() => {
    getTaskList()
  }, []);

  const getTaskList = () => {
    todo.getTaskList()
      .then(response => response.json())
      .then(response => updateList(Object.values(response)))
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    addTask(text);
  };

  const handleCreateNewTask = () => {
    todo.createNewTask(task);
    addTask('');
  };

  const handleUpdateTask = (value: any) => {
    console.log(value)
    todo.updateTask(value.id, value.task);
    handleCloseModal();
    addTask('');
  };

  const handleDeleteTask = (id: string, text: string) => {
    todo.deleteTask(id, text);
  };

  const handleOpenModal = (id: string) => {
    showModal(true)
    const item = list.find((item: any) => item.id === id)
    setmodalItem(item);
  };

  const handleCloseModal = () => {
    showModal(false)
  };

  return (
    <div className="layout-container">
      <Modal
        handleCloseModal={handleCloseModal}
        handleUpdateTask={handleUpdateTask}
        modalItem={modalItem}
        modal={modal}
      />
      <div className="layout-add">
        <AddTask handleChange={handleChange} handleCreateNewTask={handleCreateNewTask}/>
      </div>
      <div className="layout-list">
        <Suspense fallback={<div>Loading...</div>}>
          <ListTemplate
            handleDeleteTask={handleDeleteTask}
            handleOpenModal={handleOpenModal}
            list={list}
          />
        </Suspense>
      </div>
    </div>
  )
};

export default Layout;