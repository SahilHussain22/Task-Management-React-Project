
import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  
  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

 
  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  }

  
  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Task Management App</h1>
      <p className="subtitle">Organize your day, one task at a time.</p>

      <TaskForm onAddTask={addTask} />

      <div className="task-header">
        <h2>My Tasks ({filteredTasks.length})</h2>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
