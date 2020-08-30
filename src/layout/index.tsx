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
    const [ list, updateList ] = useState<Array<{ id: string, text: string }>>([]);
    const [ task, addTask ] = useState<string>(null as unknown as string);
    const [ modal, showModal ] = useState<boolean>(false);
    const [ item, setItem ] = useState<any>();

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

    const handleUpdateTask = (id: string,) => {
        todo.updateTask(id, task);
        handleCloseModal();
        addTask('');
    };

    const handleDeleteTask = (id: string, text: string) => {
        todo.deleteTask(id, text);
    };

    const handleOpenModal = (id: string) => {
        showModal(true)
        const item = list.find((item: any) => item.id === id)
        setItem(item);
    };

    const handleCloseModal = () => {
        showModal(false)
    };

    return (
        <div className="layout-container">
            <Modal
                handleChange={handleChange}
                handleCloseModal={handleCloseModal}
                handleUpdateTask={handleUpdateTask}
                item={item}
                modal={modal}
            />
            <div className="layout-add">
                <AddTask handleChange={handleChange} handleCreateNewTask={handleCreateNewTask}/>
            </div>
            <div className="layout-list">
                <Suspense fallback={<div>Loading...</div>}>
                    {
                        list?.map((item) => {
                            const list = {...item, handleChange}
                            const options = {
                                handleDeleteTask,
                                handleChange: handleChange,
                                handleOpenModal: handleOpenModal,
                                id: item.id,
                                text: item.text,
                            };
                            const listProps = {list, options};

                            return (
                                <div key={item.id}>
                                    <ListTemplate {...listProps}/>
                                </div>
                            )
                        })
                    }
                </Suspense>
            </div>
        </div>
    )
};

export default Layout;