import React, {
    lazy,
    Suspense,
    useEffect,
    useState,
} from 'react';
import './index.css';
import {formatList} from '../index.utility';

const ListTemp = lazy(() => import('../components/list'));

const tasks = {
    1: {id: '1', text: 'Read description of programming challenge'},
    2: {id: '2', text: 'Implement awesome web app'},
    3: {id: '3', text: 'Polish project'},
    9: {id: '9', text: 'Send solution to LogMeIn'},
};

const Layout: React.FC = () => {
    const [list, updateList] = useState<Array<{ id: number, text: string }>>([]);

    useEffect(() => {
        const formattedList = formatList(tasks);

        updateList(formattedList as any);
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