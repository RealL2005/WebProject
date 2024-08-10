import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App.jsx'
import LoginPage from './loginpage.jsx';
import RegPage from "./registerpage.jsx";
import Create from "./Create.jsx";
import Project from "./Project.jsx";
import Task from "./Task.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegPage />} />
                <Route path="/create" element={<Create />} />
                <Route path="/project" element={<Project />} />
                <Route path="/task" element={<Task />} />
                {/* 其他路由 */}
            </Routes>
        </Router>
    </React.StrictMode>
);