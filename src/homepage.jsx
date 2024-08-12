import React, {useEffect, useState} from 'react';
import './bootstrap-combined.min.css'
import {Link} from 'react-router-dom';


const Homepage = () => {
    const [itemList, setItemList] = useState([]);
    const [inputText, setInputText] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [showInput, setShowInput] = useState(false);
    const [title, setTitle] = useState('');
    // 在组件加载时读取 localStorage
    useEffect(() => {
        let input = prompt("请输入您的用户名：");
        if (input) {
            setTitle(input);
            const storedItems = localStorage.getItem(input);
            if (storedItems) {
                setItemList(JSON.parse(storedItems));
            }
        }
    }, []);

    // 每当 itemList 更新时，保存到 localStorage
    useEffect(() => {
        if (itemList.length !== 0 && title) {
            localStorage.setItem(title, JSON.stringify(itemList));
        }
    }, [itemList, title]);


    const handleAddOrUpdateItem = () => {
        const newItem = { text: inputText};
        if (editingIndex !== null) {
            const updatedItems = itemList.map((item, i) => (i === editingIndex ? newItem : item));
            setItemList(updatedItems);
            setEditingIndex(null);
        } else {
            setItemList([...itemList, newItem]);
        }
        setInputText('');
        setShowInput(false);
    };

    const handleEditItem = (index) => {
        setInputText(itemList[index].text);
        setEditingIndex(index);
        setShowInput(true);
    };

    const handleDeleteItem = (index) => {
        const updatedItems = itemList.filter((_, i) => i !== index);
        setItemList(updatedItems);
    };
    return (
        <div className="container-fluid">
            <div className="row-fluid">
                <div className="span12">
                    <div className="navbar">
                        <div className="navbar-inner">
                            <div className="container-fluid">
                                <button className="return-home">
                                    <Link to='/login'><b>返回登陆页面</b></Link>
                                </button>
                                <a
                                    data-target=".navbar-responsive-collapse"
                                    data-toggle="collapse"
                                    className="btn btn-navbar">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </a>
                                <a className="brand">敏捷看板 项目</a>
                                <div className="nav-collapse collapse navbar-responsive-collapse">
                                    <ul className="nav">
                                        <li className="active">
                                            <Link to="/">主页</Link>
                                        </li>
                                    </ul>
                                    <ul className="nav pull-right">
                                        <li>
                                            <Link to="/homepage">HELP</Link>
                                        </li>
                                        <li className="divider-vertical"></li>
                                        <li className="dropdown">
                                            <a
                                                data-toggle="dropdown"
                                                className="dropdown-toggle"
                                                href="#">下拉菜单<strong className="caret"></strong>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">组长</a></li>
                                                <li><a href="#">组员1</a></li>
                                                <li><a href="#">组员2</a></li>
                                                <li className="divider"></li>
                                                <li><a href="#">简介</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row-fluid">
                        <div className="span12">
                            <div className="row-fluid">
                                <div className="span4">
                                    <blockquote>
                                        <p>
                                            <b>项目操作栏</b>
                                        </p>
                                    </blockquote>
                                    <button onClick={() => setShowInput(true)}>创建</button>
                                    {showInput && (
                                        <div className="input-area">
                                            <input type="text" value={inputText}
                                                   onChange={(e) => setInputText(e.target.value)}
                                                   placeholder="输入内容"/>
                                            <button
                                                onClick={handleAddOrUpdateItem}>{editingIndex !== null ? '更新' : '添加'}</button>
                                            {editingIndex !== null &&
                                                <button onClick={() => setEditingIndex(null)}>取消编辑</button>}
                                        </div>
                                    )}
                                    <div className="item-list">
                                        {itemList.map((item, index) => (
                                            <div key={index} className="item">
                                                <Link to="/task"><b> {item.text} </b></Link>
                                                {/*<a rel="noopener noreferrer" >{item.text}</a>*/}
                                                <button onClick={() => handleEditItem(index)}>编辑</button>
                                                <button onClick={() => handleDeleteItem(index)}>删除</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Homepage;