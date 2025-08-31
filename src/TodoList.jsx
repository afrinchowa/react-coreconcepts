import React, { useState, useEffect } from "react";

const Home = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });
  const [selectedView, setSelectedView] = useState("daily");

  const today = new Date();
  const todayDate = today.toISOString().split("T")[0];

  // Save tasks in localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const handleAddTask = () => {
    if (task.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: task,
      date: todayDate,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setTask("");
  };

  // Toggle completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Clear completed
  const clearCompleted = () => {
    setTasks(tasks.filter((t) => !t.completed));
  };

  // Date range filters
  const getTasksByDateRange = (daysBack) => {
    const cutoff = new Date();
    cutoff.setDate(today.getDate() - daysBack);
    return tasks.filter((t) => new Date(t.date) >= cutoff);
  };

  const dailyTasks = tasks.filter((t) => t.date === todayDate);
  const weeklyTasks = getTasksByDateRange(7);
  const monthlyTasks = getTasksByDateRange(30);

  const taskLists = {
    daily: dailyTasks,
    weekly: weeklyTasks,
    monthly: monthlyTasks,
  };

  const renderTasks = (taskList) =>
    taskList.length === 0 ? (
      <p style={styles.emptyMsg}>✨ No tasks yet. Add one above!</p>
    ) : (
      <ul style={styles.ul}>
        {taskList.map((t) => (
          <li
            key={t.id}
            style={{
              ...styles.task,
              textDecoration: t.completed ? "line-through" : "none",
              color: t.completed ? "gray" : "black",
            }}
          >
            <span onClick={() => toggleComplete(t.id)} style={styles.taskText}>
              {t.text} <small style={styles.date}>({t.date})</small>
            </span>
            <button onClick={() => deleteTask(t.id)} style={styles.deleteBtn}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    );

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>🗓️ To-Do Tracker</h1>

      {/* Input */}
      <div style={styles.inputWrapper}>
        <input
          style={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task for today..."
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        />
        <button onClick={handleAddTask} style={styles.button}>
          ➕ Add
        </button>
      </div>

      {/* Tabs */}
      <div style={styles.navButtons}>
        {["daily", "weekly", "monthly"].map((view) => (
          <button
            key={view}
            onClick={() => setSelectedView(view)}
            style={
              selectedView === view ? styles.activeTab : styles.tab
            }
          >
            {view.charAt(0).toUpperCase() + view.slice(1)}{" "}
            <span style={styles.badge}>{taskLists[view].length}</span>
          </button>
        ))}
      </div>

      {/* Task List */}
      <div style={styles.taskList}>{renderTasks(taskLists[selectedView])}</div>

      {/* Clear Completed */}
      {tasks.some((t) => t.completed) && (
        <button onClick={clearCompleted} style={styles.clearBtn}>
          🧹 Clear Completed
        </button>
      )}
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "Segoe UI",
    maxWidth: "700px",
    margin: "0 auto",
    padding: "40px",
    backgroundColor: "#f9f9ff",
    borderRadius: "12px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "32px",
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
  },
  inputWrapper: {
    display: "flex",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    marginLeft: "10px",
    padding: "12px 20px",
    fontSize: "16px",
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  navButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  tab: {
    padding: "10px 20px",
    borderRadius: "20px",
    background: "#eee",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  },
  activeTab: {
    padding: "10px 20px",
    borderRadius: "20px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    fontSize: "14px",
  },
  badge: {
    background: "white",
    color: "#4f46e5",
    borderRadius: "12px",
    padding: "2px 8px",
    marginLeft: "6px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  taskList: {
    textAlign: "left",
  },
  ul: {
    listStyle: "none",
    padding: 0,
  },
  task: {
    fontSize: "18px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    padding: "10px 14px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    transition: "0.2s ease",
  },
  taskText: {
    cursor: "pointer",
  },
  date: {
    fontSize: "12px",
    color: "#888",
  },
  deleteBtn: {
    background: "transparent",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  clearBtn: {
    marginTop: "20px",
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    display: "block",
    marginLeft: "auto",
  },
  emptyMsg: {
    textAlign: "center",
    color: "#666",
    fontStyle: "italic",
    marginTop: "20px",
  },
};

export default Home;
