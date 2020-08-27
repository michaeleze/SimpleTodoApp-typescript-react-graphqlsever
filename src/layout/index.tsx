import React, {Suspense, lazy} from 'react';
import './index.css';

const ListTemp = lazy(() => import('../components/list'));

const Layout: React.FC = () => {
    const handleAdd = () => {
        console.log('adding...')
    }

    const handleEdit = () => {
        console.log('editing...')
    }

    const handleDelete = () => {
        console.log('deleting...')
    }

    const optionLabel = {
        handles: {handleDelete, handleEdit},
        label: {edit: 'edit', remove: 'delete'}
    };

    return (
        <div className="layout-container">
            <div className="layout-list">
                <Suspense fallback={<div>Loading...</div>}>
                    <ListTemp options={optionLabel} list={'list'}/>
                </Suspense>
            </div>
            <div className="layout-add">
                <button className="layout-add--button" onClick={handleAdd}>add</button>
            </div>
        </div>
    )
}

export default Layout;