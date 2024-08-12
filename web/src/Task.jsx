import React, {useEffect, useState} from 'react';
import './Task.css';

const Task = () => {
    const [TaskList, setTaskList] = useState([]);
    const [inputText, setInputText] = useState('');
    const [inputTag, setInputTag] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [showInput, setShowInput] = useState(false);
    const [title, setTitle] = useState('');
    const [activePanel, setActivePanel] = useState(null);
    const [comments, setComments] = useState({});
    const [attachment, setAttachment] = useState(null);
    const [attachmentPreview, setAttachmentPreview] = useState('');

    useEffect(() => {
        let input = prompt("请输入您的用户名和项目名称：");
        if (input) {
            setTitle(input);
            const storedItems = localStorage.getItem(input);
            if (storedItems) {
                setTaskList(JSON.parse(storedItems));
            }
        }
    }, []);


    useEffect(() => {
        if (TaskList.length !== 0 && title) {
            localStorage.setItem(title, JSON.stringify(TaskList));
        }
    }, [TaskList, title]);

    const handleAddOrUpdateItem = () => {
        const tagMap = {
            left: 'ToDo',
            center: 'Doing',
            right: 'Done'
        };
        if (editingIndex !== null) {
            const updatedTasks = TaskList.map((item, index) => {
                if (index === editingIndex) {
                    return {
                        ...item,
                        text: inputText,
                        tag: tagMap[activePanel] || '',
                        attachment: attachment || item.attachment,
                        comments: item.comments
                    };
                }
                return item;
            });
            setTaskList(updatedTasks);
            setEditingIndex(null);
            setInputText('');
            setInputTag('');
            setAttachment(null);
        } else {
            // 添加新任务
            const newTask = {
                text: inputText,
                tag: tagMap[activePanel] || '',
                attachment: attachment,
                comments: [],
            };
            setTaskList([...TaskList, newTask]);
            setInputText('');
            setInputTag('');
            setAttachment(null);
        }
    };

    const handleAddComment = (index,commentText) => {
        const time = new Date().toLocaleString();
        const updatedTasks = TaskList.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    comments: [...item.comments, {text: commentText, time: time }],
                };
            }
            return item;
        });
        setTaskList(updatedTasks);
    }

    const handleEditItem = (index) => {
        setInputText(TaskList[index].text);
        setInputTag(TaskList[index].tag);
        setEditingIndex(index);
        setShowInput(true);
    };

    const handleDeleteItem = (index) => {
        const updatedTasks = TaskList.filter((_, i) => i !== index);
        setTaskList(updatedTasks);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
        if (file && allowedTypes.includes(file.type)) {
            setAttachment(file);
            console.log(file);
            console.log(attachment);
            const previewUrl = URL.createObjectURL(file);
            console.log(previewUrl);
            setAttachmentPreview(previewUrl);
        } else {
            alert('只支持 JPEG、PNG 和 PDF 文件。');
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
                    <h3>待办事项</h3>
                    <button onClick={() => setShowInput(true)}>创建</button>
                    {showInput && (
                        <div className="input-area">
                            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}
                                   placeholder="输入内容"/>
                            <input type="file" onChange={handleFileChange}/>
                            {attachmentPreview && (
                                <div className="attachment-preview">
                                    <h4>附件预览:</h4>
                                    {attachment ? (
                                        attachment.type !== 'application/pdf' ? (
                                            <img src={attachmentPreview} alt="Attachment" style={{ width: '200px' }} />
                                        ) : (
                                            <a href={attachmentPreview} target="_blank" rel="noopener noreferrer">{attachment.name}</a>
                                        )
                                    ) : (
                                        <p>请上传文件以查看预览。</p>
                                    )}
                                </div>
                            )}
                            <button onClick={handleAddOrUpdateItem}>{editingIndex !== null ? '更新' : '添加'}</button>
                            {editingIndex !== null && <button onClick={() => setEditingIndex(null)}>取消编辑</button>}
                        </div>
                    )}

                    <div className="item-list">
                    {TaskList.map((item, index) => (
                        <div key={index} className="item">
                            <a rel="noopener noreferrer">{item.text} </a>
                            <span className="tag">{item.tag}</span>
                            {/*{item.attachment && <span className="attachment">附件: {item.attachment.name}</span>}*/}
                            {/*{item.attachment && (*/}
                            {/*    <span className="attachment">*/}
                            {/*    <a href={item.attachmentPreview} target="_blank" rel="noopener noreferrer" className="attachment">*/}
                            {/*        附件: {item.attachment.name}*/}
                            {/*    </a>*/}
                            {/*    </span>*/}
                            {/*)}*/}
                            <span className="attachment">
                            {attachment ? (
                                attachment.type !== 'application/pdf' ? (
                                    <img src={attachmentPreview} alt="Attachment" style={{width: '200px'}}/>
                                ) : (
                                    <a href={attachmentPreview} target="_blank"
                                       rel="noopener noreferrer">{attachment.name}</a>
                                )
                            ) : (
                                <p>请上传文件以查看预览。</p>
                            )}
                            </span>
                                <div className="comments-section">
                                <button onClick={() => {
                                    const commentsDiv = document.getElementById(`comments-${index}`);
                                    commentsDiv.style.display = commentsDiv.style.display === 'none' ? 'block' : 'none';
                                }}>
                                    {item.comments.length > 0 ? '收起评论' : '添加评论'}
                                </button>
                                <div id={`comments-${index}`} style={{display: 'none'}}>
                                    {item.comments.map((comment, i) => (
                                        <div key={i} className="comment">
                                            <span>{comment.text} </span>
                                            <span className="comment-time">({comment.time})</span>
                                        </div>
                                    ))}
                                    <input
                                        type="text"
                                        placeholder="添加评论"
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && e.target.value) {
                                                handleAddComment(index, e.target.value);
                                                e.target.value = '';
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            <button onClick={() => handleEditItem(index)}>编辑</button>
                            <button onClick={() => handleDeleteItem(index)}>删除</button>
                        </div>
                        ))}
                    </div>
                </div>
            )}

            {activePanel === 'center' && (
                <div className="panel-content">
                    <h3>进行中</h3>
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
                                <span className="tag">{item.tag}</span>
                                <button onClick={() => handleEditItem(index)}>编辑</button>
                                <button onClick={() => handleDeleteItem(index)}>删除</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activePanel === 'right' && (
                <div className="panel-content">
                    <h3>已完成</h3>
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
                                <span className="tag">{item.tag}</span>
                                <button onClick={() => handleEditItem(index)}>编辑</button>
                                <button onClick={() => handleDeleteItem(index)}>删除</button>
                            </div>
                        ))}
                    </div>
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