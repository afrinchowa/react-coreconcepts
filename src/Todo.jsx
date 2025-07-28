import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={containerStyle}>
      <h2>📝 Simple To-Do List</h2>

      <div style={inputWrapper}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleAddTask} style={addButton}>
          ➕ Add
        </button>
      </div>

      <ul style={listStyle}>
        {tasks.map((item, index) => (
          <li key={index} style={listItem}>
            {item}
            <button onClick={() => handleDelete(index)} style={deleteButton}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const containerStyle = {
  maxWidth: "500px",
  margin: "60px auto",
  padding: "30px",
  border: "1px solid #ddd",
  borderRadius: "12px",
  backgroundColor: "#f9f9f9",
  textAlign: "center",
};

const inputWrapper = {
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  marginBottom: "20px",
};

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  width: "70%",
  borderRadius: "6px",
  border: "1px solid #aaa",
};

const addButton = {
  padding: "10px 15px",
  fontSize: "16px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  textAlign: "left",
};

const listItem = {
  backgroundColor: "#fff",
  padding: "10px 15px",
  marginBottom: "10px",
  borderRadius: "6px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
};

const deleteButton = {
  backgroundColor: "#dc3545",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "5px 10px",
  cursor: "pointer",
};

export default TodoList;
