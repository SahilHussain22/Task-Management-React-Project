
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <label className="task-title">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <span className={task.completed ? "completed" : ""}>
          {task.title}
        </span>
      </label>

      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;