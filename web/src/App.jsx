import './App.css'
import * as task_request from './request/task.request.jsx'
import * as client_request from './request/client.websocket.jsx'
import React from 'react';
import {Link} from 'react-router-dom';
import './online.css'




function App() {
    return (
        <div className="logo">
            <div className="navi">
                <Link to="/overview"><b>overview</b></Link>
                <Link to="/help"><b>help</b></Link>
                <Link to="/contact"><b>contact</b></Link>
                <Link to="/register"><b>注册</b></Link>
                <Link to="/login"><b>登录</b></Link>
            </div>
        </div>
    );
}

export default App;

