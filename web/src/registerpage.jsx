import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './register.css';
import * as axios from "axios";

const client = axios.default;



function RegPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const AddUser = (event) => {
        event.preventDefault();


        client.post("http://localhost:7001/register/add_user",{
                username: username,
                age: age,
                password: password,
            },
            {
                headers:{
                    "content-type": "application/json"
                }
            }
        ).then((response) => {
            console.log(response.data);
            if (response.data.success) {
                alert("注册成功！");
                client.post("http://localhost:7001/api/add_user",{
                        username:username,
                        password:password,
                    },
                    {
                        headers:{
                            "content-type": "application/json"
                        }
                    }
                ).then((response) => {
                    console.log(response.data);
                    navigate('/login');
                })


            } else {
                alert("请重新注册");
            }
        })

    }

    return (
        <>
            <button className="return-home">
                <Link to='/'><b>返回主页</b></Link>
            </button>
            <div className="register">

                <h1>Register</h1>
                <form onSubmit={AddUser}>
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
                                id="age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                placeholder="年龄"
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
                                value="注册"
                            />
                        </label>
                </form>
            </div>
        </>
    );
}

export default RegPage;