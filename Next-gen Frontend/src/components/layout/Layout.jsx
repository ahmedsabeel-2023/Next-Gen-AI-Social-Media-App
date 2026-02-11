import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';
import ChatAssistant from '../ChatAssistant';
import './Layout.css';

const Layout = () => {
    return (
        <div className="layout-container">
            <Sidebar />
            <main className="layout-main">
                <Outlet />
            </main>
            <Rightbar />
            <ChatAssistant />
        </div>
    );
};

export default Layout;
