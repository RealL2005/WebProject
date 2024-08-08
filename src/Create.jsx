import React, { useState } from 'react';
import "./create.css"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


function Create() {
    const [itemList, setItemList] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddItem = () => {
        if (inputText.trim()) {
            setItemList([...itemList, { text: inputText }]);
            setInputText('');
        }
    };

    const handleEditItem = (index) => {
        setIsEditing(true);
        setEditIndex(index);
        setInputText(itemList[index].text);
    };

    const handleUpdateItem = () => {
        const updatedItems = [...itemList];
        updatedItems[editIndex].text = inputText;
        setItemList(updatedItems);
        resetInput();
    };

    const handleDeleteItem = (index) => {
        const updatedItems = itemList.filter((_, i) => i !== index);
        setItemList(updatedItems);
    };

    const resetInput = () => {
        setInputText('');
        setIsEditing(false);
        setEditIndex(null);
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedItems = Array.from(itemList);
        const [movedItem] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, movedItem);

        setItemList(reorderedItems);
    };

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="添加任务"
            />
            <button onClick={isEditing ? handleUpdateItem : handleAddItem}>
                {isEditing ? '更新' : '添加'}
            </button>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {itemList.map((item, index) => (
                                <Draggable key={item.text} draggableId={item.text} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="draggable-item"
                                        >
                                            <input type="text" readOnly value={item.text} />
                                            <button onClick={() => handleEditItem(index)}>编辑</button>
                                            <button onClick={() => handleDeleteItem(index)}>删除</button>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}

export default Create;