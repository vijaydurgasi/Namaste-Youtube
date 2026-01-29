import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <div className="flex pt-14">
            <Sidebar />
            <Outlet />
        </div>
    );
};


export default Body;

// The outlet replaces the Body component based on the route we provide like if it is / Body is rendered if it is watch, watch should render
// 