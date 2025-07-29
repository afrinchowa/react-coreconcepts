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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const getTasksByDateRange = (daysBack) => {
    const cutoff = new Date();
    cutoff.setDate(today.getDate() - daysBack);
    return tasks.filter((t) => new Date(t.date) >= cutoff);
  };

  const dailyTasks = tasks.filter((t) => t.date === todayDate);
  const weeklyTasks = getTasksByDateRange(7);
  const monthlyTasks = getTasksByDateRange(30);

  const renderTasks = (taskList) => (
    <ul>
      {taskList.map((t) => (
        <li
          key={t.id}
          style={{
            ...styles.task,
            textDecoration: t.completed ? "line-through" : "none",
            color: t.completed ? "gray" : "black",
          }}
          onClick={() => toggleComplete(t.id)}
        >
          {t.text} ({t.date})
        </li>
      ))}
    </ul>
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>🗓️ Daily, Weekly & Monthly To-Do Tracker</h1>

      <div style={styles.inputWrapper}>
        <input
          style={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task for today..."
        />
        <button onClick={handleAddTask} style={styles.button}>➕ Add</button>
      </div>

      <div style={styles.navButtons}>
        <button onClick={() => setSelectedView("daily")} style={selectedView === "daily" ? styles.activeTab : styles.tab}>Daily</button>
        <button onClick={() => setSelectedView("weekly")} style={selectedView === "weekly" ? styles.activeTab : styles.tab}>Weekly</button>
        <button onClick={() => setSelectedView("monthly")} style={selectedView === "monthly" ? styles.activeTab : styles.tab}>Monthly</button>
      </div>

      <div style={styles.taskList}>
        {selectedView === "daily" && renderTasks(dailyTasks)}
        {selectedView === "weekly" && renderTasks(weeklyTasks)}
        {selectedView === "monthly" && renderTasks(monthlyTasks)}
      </div>
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
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    marginLeft: "10px",
    padding: "10px 20px",
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
  taskList: {
    textAlign: "left",
  },
  task: {
    fontSize: "18px",
    marginBottom: "10px",
    cursor: "pointer",
  },
};

export default Home;