import React, { useState } from 'react';
import './login.css';
import * as axios from "axios";

import {Link, useNavigate} from "react-router-dom";

const client = axios.default;



function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const checkUser = (event) => {
        event.preventDefault();

        client.post("http://localhost:7001/api/get_user",{
                username: username,
                password: password,
            },
            {
                headers:{
                    "content-type": "application/json"
                }
            }
        ).then((response) => {

            if (response.data.success) {
                alert("登录成功！");
                navigate('/homepage')
            } else {
                alert("登录名或密码错误！");
            }
        })

    }

    return (
        <>
            <button className="return-home">
                <Link to='/register'><b>返回注册页面</b></Link>
            </button>
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={checkUser}>
                        <label>
                            <input
                                type="text"
                                id="uname"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="用户名"
                            /><br/>
                        </label>
                        <label>
                            <input
                                type="password"
                                id="pwd"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="密码"
                            /><br/>
                        </label>
                        <label>
                            <input
                                type="submit"
                                id="but"
                                value="登录"
                            />
                        </label>
                    </form>
                </div>
            </>
    );
}

export default LoginPage;