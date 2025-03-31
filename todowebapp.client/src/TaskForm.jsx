import React, { useState } from 'react';

function TaskForm({ onTaskAdded }) {
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        await fetch('api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, completed: false })
        });

        setText('');
        onTaskAdded();
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add new task"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TaskForm;