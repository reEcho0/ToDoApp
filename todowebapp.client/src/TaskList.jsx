import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onTaskUpdate }) {
    return (
        <ul className="task-list">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onTaskUpdate={onTaskUpdate} />
            ))}
        </ul>
    );
}

export default TaskList;