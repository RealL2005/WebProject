import React, {useEffect, useState} from 'react';
import './Task.css';

const name = "project";

const Task = () => {
    const [TaskList, setTaskList] = useState([]);
    const [inputText, setInputText] = useState('');

    const [editingIndex, setEditingIndex] = useState(null);
    const [showInput, setShowInput] = useState(false);


    useEffect(() => {
        const storedTasks = localStorage.getItem('TaskList');
        if (storedTasks) {
            setTaskList(JSON.parse(storedTasks));
        }
    }, []);


    useEffect(() => {
        if(TaskList.length !== 0){
            localStorage.setItem('TaskList', JSON.stringify(TaskList));
        }
    }, [TaskList]);

    const handleAddOrUpdateItem = () => {
        const newTask = { text: inputText};
        if (editingIndex !== null) {
            const updatedTasks = TaskList.map((item, i) => (i === editingIndex ? newTask : item));
            setTaskList(updatedTasks);
            setEditingIndex(null);
        } else {
            setTaskList([...TaskList, newTask]);
        }
        setInputText('');
        setShowInput(false);
    };

    const handleEditItem = (index) => {
        setInputText(TaskList[index].text);
        setEditingIndex(index);
        setShowInput(true);
    };

    const handleDeleteItem = (index) => {
        const updatedTasks = TaskList.filter((_, i) => i !== index);
        setTaskList(updatedTasks);
    };

    const [activePanel, setActivePanel] = useState(null);
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    return (
        <div className="container">
            <div className="left-panel" onClick={() => setActivePanel('left')}>
                <h2>ToDo</h2>
            </div>
            <div className="center-panel" onClick={() => setActivePanel('center')}>
                <h2>Doing</h2>
            </div>
            <div className="right-panel" onClick={() => setActivePanel('right')}>
                <h2>Done</h2>
            </div>

            {activePanel === 'left' && (
                <div className="panel-content">
                    <h3>创建任务</h3>
                    <button onClick={() => setShowInput(true)}>创建</button>
                    {showInput && (
                        <div className="input-area">
                            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}
                                   placeholder="输入内容"/>
                            <button onClick={handleAddOrUpdateItem}>{editingIndex !== null ? '更新' : '添加'}</button>
                            {editingIndex !== null && <button onClick={() => setEditingIndex(null)}>取消编辑</button>}
                        </div>
                    )}

                    <div className="item-list">
                        {TaskList.map((item, index) => (
                            <div key={index} className="item">
                                <a rel="noopener noreferrer">{item.text}</a>
                                <button onClick={() => handleEditItem(index)}>编辑</button>
                                <button onClick={() => handleDeleteItem(index)}>删除</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activePanel === 'center' && (
                <div className="panel-content">
                    <h3>创建任务</h3>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="输入任务名称"
                    />
                    <button onClick={handleAddTask}>添加任务</button>
                    <h4>任务列表:</h4>
                    <ul>
                        {tasks.map((t, index) => (
                            <li key={index}>{t}</li>
                        ))}
                    </ul>
                </div>
            )}

            {activePanel === 'right' && (
                <div className="panel-content">
                    <h3>创建任务</h3>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="输入任务名称"
                    />
                    <button onClick={handleAddTask}>添加任务</button>
                    <h4>任务列表:</h4>
                    <ul>
                        {tasks.map((t, index) => (
                            <li key={index}>{t}</li>
                        ))}
                    </ul>
                </div>
            )}

            {activePanel === null && (
                <div className="instructions">
                    <p>请点击任一面板以显示相应内容。</p>
                </div>
            )}
        </div>
    );
};


export default Task;