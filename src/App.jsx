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
                <a href="#"><b>overview</b></a>
                <a href="#"><b>help</b></a>
                <a href="#"><b>contact</b></a>
                <a href="#"><b>homepage</b></a>

                <Link to="/register"><b>注册</b></Link>
                <Link to="/login"><b>登录</b></Link>
                <Link to="/create"><b>登录</b></Link>
            </div>
        </div>
    );
}

export default App;

