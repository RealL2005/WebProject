// import React, { useState } from 'react';
// import "./create.css"
//
//
// function Create() {
//     const [itemList, setItemList] = useState([]);
//     const [inputText, setInputText] = useState('');
//     const [editingIndex, setEditingIndex] = useState(null);
//
//     const handleAddOrUpdateItem = () => {
//         if (inputText.trim() === '') return;
//
//         const updatedList = [...itemList];
//
//         if (editingIndex !== null) {
//             updatedList[editingIndex] = inputText; // 更新
//             setEditingIndex(null); // 结束编辑
//         } else {
//             updatedList.push(inputText); // 添加新项
//         }
//
//         setItemList(updatedList);
//         setInputText(''); // 重置输入框
//     };
//
//     const handleEditItem = (index) => {
//         setInputText(itemList[index]);
//         setEditingIndex(index);
//     };
//
//     const handleDeleteItem = (index) => {
//         const updatedList = itemList.filter((_, i) => i !== index);
//         setItemList(updatedList);
//     };
//
//     return (
//         <div className="App">
//             <div className="input-area">
//                 <input
//                     type="text"
//                     value={inputText}
//                     onChange={(e) => setInputText(e.target.value)}
//                     placeholder="输入内容"
//                 />
//                 <button onClick={handleAddOrUpdateItem}>
//                     {editingIndex !== null ? '更新' : '添加'}
//                 </button>
//                 {editingIndex !== null && (
//                     <button onClick={() => setEditingIndex(null)}>取消编辑</button>
//                 )}
//             </div>
//             <h3>显示的内容:</h3>
//             <div className="item-list">
//                 {itemList.map((item, index) => (
//                     <div key={index} className="item">
//                         <span>{item}</span>
//                         <button onClick={() => handleEditItem(index)}>编辑</button>
//                         <button onClick={() => handleDeleteItem(index)}>删除</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
//
// export default Create;


import React, { useState, useEffect } from 'react';
import "./create.css"


function Create() {
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
        <div className="App">
            <button onClick={() => setShowInput(true)}>创建</button>
            {showInput && (
                <div className="input-area">
                    <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="输入内容" />
                    <button onClick={handleAddOrUpdateItem}>{editingIndex !== null ? '更新' : '添加'}</button>
                    {editingIndex !== null && <button onClick={() => setEditingIndex(null)}>取消编辑</button>}
                </div>
            )}

            <div className="item-list">
                {itemList.map((item, index) => (
                    <div key={index} className="item">
                        <a rel="noopener noreferrer">{item.text}</a>
                        <button onClick={() => handleEditItem(index)}>编辑</button>
                        <button onClick={() => handleDeleteItem(index)}>删除</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Create;