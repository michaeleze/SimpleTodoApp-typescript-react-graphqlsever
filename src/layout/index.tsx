import React, {
    lazy,
    Suspense,
    useEffect,
    useState,
} from 'react';
import './index.css';
import {todo} from "../service";
import AddTask from "../components/addTask";

const ListTemplate = lazy(() => import('../components/list'));

const Layout: React.FC = () => {
    const [ list, updateList ] = useState<Array<{ id: string, text: string }>>([]);
    const [ task, addTask ] = useState<string>(null as unknown as string);
    const [ enableEdit, setEnbleEditValue ] = useState<boolean>(false);
    const [ taskId, setTaskId ] = useState<string>(null as unknown as string);

    useEffect(() => {
        todo.getTaskList();
        todo.subscribe((data: any) => {
            updateList(data);
        });
        todo.unsubscribe(() => {
            return null;
        })
    }, [todo.subscribe, todo.getTaskList]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        addTask(text);
    };

    const handleEditTask = (id: string) => {
        if(id === taskId ) {
            setEnbleEditValue(!enableEdit);
        }
        console.log('task id', id)
    };

    const handleCreateNewTask = () => {
        console.log(task);
        todo.createNewTask(task);
        addTask('');
    };

    const handleUpdateTask = (id: string,) => {
        console.log('editing...', id);
        todo.updateTask(id, task);
    };

    const handleDeleteTask = (id: string) => {
        todo.deleteTask(id);
    };

    return (
        <div className="layout-container">
            <div className="layout-add">
                <AddTask handleChange={handleChange} handleCreateNewTask={handleCreateNewTask}/>
            </div>
            <div className="layout-list">
                <Suspense fallback={<div>Loading...</div>}>
                    {
                        list?.map((item) => {
                            const list = {...item, enableEdit, handleEditTask }
                            const options = {handleDeleteTask, handleUpdateTask, id: item.id};

                            return (
                                <div key={item.id}>
                                    <ListTemplate options={options} list={list}/>
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