import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import FilterButtons from './FilterButtons';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await fetch('api/tasks');
        const data = await response.json();
        setTasks(data);
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'active') return !task.completed;
        return true;
    });

    return (
        <div className="app-container">
            <h1>Task Manager</h1>
            <TaskForm onTaskAdded={fetchTasks} />
            <FilterButtons onFilterChange={setFilter} activeFilter={filter} />
            <TaskList tasks={filteredTasks} onTaskUpdate={fetchTasks} />
        </div>
    );
}

export default App;