import React, { useState } from 'react';
import './login.css';
import * as axios from "axios";
import * as response from "autoprefixer";

const client = axios.default;



function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
            console.log(response.data);
        })
        console.log(response.data.success);


        if (response.success) {
            alert("登录成功！");
        } else {
            alert("登录名或密码错误！");
        }
    }

    return (
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
    );
}

export default LoginPage;