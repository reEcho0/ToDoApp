import React, { useState } from 'react';

function TaskItem({ task, onTaskUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleToggle = async () => {
        await fetch(`api/tasks/${task.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...task, completed: !task.completed })
        });
        onTaskUpdate();
    };

    const handleDelete = async () => {
        await fetch(`api/tasks/${task.id}`, {
            method: 'DELETE'
        });
        onTaskUpdate();
    };

    const handleEdit = async () => {
        if (isEditing) {
            await fetch(`api/tasks/${task.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...task, text: editText })
            });
            onTaskUpdate();
        }
        setIsEditing(!isEditing);
    };

    return (
        <li className="task-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleToggle}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                <span onClick={handleEdit} className={task.completed ? 'completed' : ''}>
                    {task.text}
                </span>
            )}
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}

export default TaskItem;