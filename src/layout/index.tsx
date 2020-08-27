import React from 'react';
import List from "../components/list";
import './index.css';

const Layout: React.FC = () => (
    <div className="layout-container">
        <div className="layout-list">
            <List />
        </div>
        <div className="layout-add">
            <button className="layout-add--button">add</button>
        </div>
    </div>
)

export default Layout;