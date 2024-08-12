import React, {useEffect, useState} from 'react';
import './bootstrap-combined.min.css'
import IMG from './photo.jpg';
import {Link} from 'react-router-dom';


const Project = () => {
    const [itemList, setItemList] = useState([]);
    const [inputText, setInputText] = useState('');
    const [url, setUrl] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [showInput, setShowInput] = useState(false);

    // 在组件加载时读取 localStorage
    useEffect(() => {
        const storedItems = localStorage.getItem('itemList');
        if (storedItems) {
            setItemList(JSON.parse(storedItems));
        }
    }, []);

    // 每当 itemList 更新时，保存到 localStorage
    useEffect(() => {
        if(itemList.length !== 0){
            localStorage.setItem('itemList', JSON.stringify(itemList));
        }
    }, [itemList]);

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
                    <div className="carousel slide" id="carousel-813470">
                        <ol className="carousel-indicators">
                            <li data-slide-to="0" data-target="#carousel-813470" className="active"></li>
                            <li data-slide-to="1" data-target="#carousel-813470"></li>
                            <li data-slide-to="2" data-target="#carousel-813470"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <img
                                    className="img-fluid"
                                    src={IMG}
                                    style={{width: '1600px', height: '500px'}}
                                />
                                <div className="carousel-caption">
                                    <h4>创建任务</h4>
                                    <p>点击按钮即可创建任务</p>
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src={IMG}
                                    style={{width: '1600px', height: '500px'}}
                                />
                                <div className="carousel-caption">
                                    <h4>编辑任务</h4>
                                    <p>点击按钮即可编辑任务</p>
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src={IMG}
                                    style={{width: '1600px', height: '500px'}}
                                />
                                <div className="carousel-caption">
                                    <h4>删除任务</h4>
                                    <p>点击按钮即可删除任务</p>
                                </div>
                            </div>
                        </div>

                        <a data-slide="prev" href="#carousel-813470" className="left carousel-control">‹</a>
                        <a data-slide="next" href="#carousel-813470" className="right carousel-control">›</a>
                    </div>

                    <div className="navbar">
                        <div className="navbar-inner">
                            <div className="container-fluid">
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
                                            <a href="#">主页</a>
                                        </li>
                                    </ul>
                                    <ul className="nav pull-right">
                                        <li><a href="#">HELP</a></li>
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

export default Project;