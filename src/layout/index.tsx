import React, {
    lazy,
    Suspense,
    useEffect,
    useState,
} from 'react';
import './index.css';
import { todo } from "../service";

const ListTemp = lazy(() => import('../components/list'));

const Layout: React.FC = () => {
    const [list, updateList] = useState<Array<{ id: number, text: string }>>([]);

    useEffect(() => {
        todo.getTaskList();
        todo.subscribe((data: any) => {
            updateList(data);
        })
        todo.unsubscribe(() => {
            return null;
        })
    }, [])

    const handleAdd = () => {
        console.log('adding...')
    }

    const handleEdit = (id: number) => {
        console.log('editing...', id)
    }

    const handleDelete = (id: number) => {
        console.log('deleting...', id)
    }

    return (
        <div className="layout-container">
            <div className="layout-list">
                <Suspense fallback={<div>Loading...</div>}>
                    {
                        list?.map((item) => {
                            const optionLabel = {
                                handles: {handleDelete, handleEdit},
                                id: item.id,
                                label: {edit: 'edit', remove: 'delete'}
                            };

                            return (
                                <div key={item.id}>
                                    <ListTemp options={optionLabel} list={item}/>
                                </div>
                            )
                        })
                    }

                </Suspense>
            </div>
            <div className="layout-add">
                <button className="layout-add--button" onClick={handleAdd}>add</button>
            </div>
        </div>
    )
}

export default Layout;