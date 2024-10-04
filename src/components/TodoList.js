// src/components/TodoList.js

import React, { useState } from 'react';
import '../App.css'; // Import your CSS file for styles

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [dueTime, setDueTime] = useState(''); // State to store the due time

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() && dueTime) {
      setTasks([...tasks, { text: task, time: dueTime }]); // Add task with due time
      setTask(''); // Clear task input
      setDueTime(''); // Clear due time input
    }
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleTimeChange = (e) => {
    setDueTime(e.target.value); // Update due time
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Task"
          value={task}
          onChange={handleTaskChange}
          required
        />
        <input
          type="time" // Input type for time
          value={dueTime}
          onChange={handleTimeChange}
          required
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t.text} - Due at: {t.time} {/* Display task and due time */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
