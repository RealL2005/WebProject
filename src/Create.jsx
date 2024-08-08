import React, { useState } from 'react';
import "./create.css"


function Create() {
    const [itemList, setItemList] = useState([]);
    const [inputText, setInputText] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAddOrUpdateItem = () => {
        if (inputText.trim() === '') return;

        const updatedList = [...itemList];

        if (editingIndex !== null) {
            updatedList[editingIndex] = inputText; // 更新
            setEditingIndex(null); // 结束编辑
        } else {
            updatedList.push(inputText); // 添加新项
        }

        setItemList(updatedList);
        setInputText(''); // 重置输入框
    };

    const handleEditItem = (index) => {
        setInputText(itemList[index]);
        setEditingIndex(index);
    };

    const handleDeleteItem = (index) => {
        const updatedList = itemList.filter((_, i) => i !== index);
        setItemList(updatedList);
    };

    return (
        <div className="App">
            <div className="input-area">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="输入内容"
                />
                <button onClick={handleAddOrUpdateItem}>
                    {editingIndex !== null ? '更新' : '添加'}
                </button>
                {editingIndex !== null && (
                    <button onClick={() => setEditingIndex(null)}>取消编辑</button>
                )}
            </div>
            <h3>显示的内容:</h3>
            <div className="item-list">
                {itemList.map((item, index) => (
                    <div key={index} className="item">
                        <span>{item}</span>
                        <button onClick={() => handleEditItem(index)}>编辑</button>
                        <button onClick={() => handleDeleteItem(index)}>删除</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Create;