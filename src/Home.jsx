import React, { useState } from "react";
import QuoteOfTheDay from "./QuoteOfTheDay";

function TaskTracker() {
  const [activeTab, setActiveTab] = useState("week"); // 'week' or 'month'
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState({
    week: [],
    month: [],
  });

  const handleAddTask = () => {
    if (input.trim() === "") return;
    const newTask = {
      text: input,
      completed: false,
    };
    setTasks({
      ...tasks,
      [activeTab]: [...tasks[activeTab], newTask],
    });
    setInput("");
  };

  const toggleComplete = (index) => {
    const updated = tasks[activeTab].map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks({ ...tasks, [activeTab]: updated });
  };

  const deleteTask = (index) => {
    const filtered = tasks[activeTab].filter((_, i) => i !== index);
    setTasks({ ...tasks, [activeTab]: filtered });
  };

  return (
<div>
   <div style={containerStyle}>
      <h2>🗓️ Weekly & Monthly Task Tracker</h2>

      <div style={tabWrapper}>
        <button
          onClick={() => setActiveTab("week")}
          style={activeTab === "week" ? activeTabStyle : tabStyle}
        >
          📅 This Week
        </button>
        <button
          onClick={() => setActiveTab("month")}
          style={activeTab === "month" ? activeTabStyle : tabStyle}
        >
          📆 This Month
        </button>
      </div>

      <div style={inputGroup}>
        <input
          type="text"
          placeholder={`Add a ${activeTab} task...`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleAddTask} style={addBtn}>
          ➕
        </button>
      </div>

      <ul style={taskList}>
        {tasks[activeTab].map((task, index) => (
          <li key={index} style={taskItem}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />
            <span
              style={{
                ...taskText,
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "#888" : "#000",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)} style={delBtn}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
<QuoteOfTheDay/>
</div>
 
  );
}

// ✨ Styles
const containerStyle = {
  maxWidth: "600px",
  margin: "50px auto",
  padding: "30px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

const tabWrapper = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
  gap: "10px",
};

const tabStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#eee",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const activeTabStyle = {
  ...tabStyle,
  backgroundColor: "#4f46e5",
  color: "#fff",
};

const inputGroup = {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
};

const inputStyle = {
  flex: 1,
  padding: "10px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #aaa",
};

const addBtn = {
  padding: "10px 15px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const taskList = {
  listStyle: "none",
  padding: 0,
};

const taskItem = {
  backgroundColor: "#f8f8f8",
  marginBottom: "10px",
  padding: "10px 15px",
  borderRadius: "6px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const taskText = {
  flex: 1,
  marginLeft: "10px",
};

const delBtn = {
  backgroundColor: "#dc3545",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "6px 10px",
  cursor: "pointer",
};

export default TaskTracker;
