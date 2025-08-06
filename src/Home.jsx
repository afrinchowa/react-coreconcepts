import React, { useState } from "react";
import QuoteOfTheDay from "./QuoteOfTheDay";
import FocusTimer from "./FocusTimer";
import MoodTracker from "./MoodTracker";
import ToggleText from "./ToggleText";
import ProductivityChart from "./ProductivityChart";

function TaskTracker() {
  const [activeTab, setActiveTab] = useState("week");
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
    <div style={pageWrapper}>
      <div style={containerStyle}>
        <h2 style={pageTitle}>🗓️ Weekly & Monthly Task Tracker</h2>

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

      <div style={widgetWrapper}>
        <QuoteOfTheDay />
        <FocusTimer />
        <MoodTracker />
        <ToggleText />
         <ProductivityChart />
      </div>
    </div>
  );
}

// ✨ Styles
const pageWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#f0f2f5",
  padding: "40px 20px",
  boxSizing: "border-box",
};

const containerStyle = {
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  padding: "30px",
  marginBottom: "30px",
  boxSizing: "border-box",
};

const pageTitle = {
  textAlign: "center",
  fontSize: "24px",
  color: "#333",
  marginBottom: "20px",
};

const tabWrapper = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
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
  flexShrink: 0,
};

const activeTabStyle = {
  ...tabStyle,
  backgroundColor: "#4f46e5",
  color: "#fff",
};

const inputGroup = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "10px",
  marginBottom: "20px",
};

const inputStyle = {
  flex: 1,
  minWidth: "0",
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
  flexShrink: 0,
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
  flexWrap: "wrap",
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
  flexShrink: 0,
};

const widgetWrapper = {
  width: "100%",
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  boxSizing: "border-box",
};

export default TaskTracker;
