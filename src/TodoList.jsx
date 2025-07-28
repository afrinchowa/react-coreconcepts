import React, { useState } from "react";

const Home = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const today = new Date();
  const todayDate = today.toISOString().split("T")[0]; // YYYY-MM-DD

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

  const weeklyTasks = getTasksByDateRange(7);
  const monthlyTasks = getTasksByDateRange(30);

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>🗓️ Daily To-Do</h1>
      <div style={styles.inputWrapper}>
        <input
          style={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task for today..."
        />
        <button onClick={handleAddTask} style={styles.button}>➕ Add</button>
      </div>

      <ul>
        {tasks
          .filter((t) => t.date === todayDate)
          .map((t) => (
            <li
              key={t.id}
              style={{
                ...styles.task,
                textDecoration: t.completed ? "line-through" : "none",
              }}
              onClick={() => toggleComplete(t.id)}
            >
              {t.text}
            </li>
          ))}
      </ul>

      <div style={styles.tracker}>
        <h2>📅 Weekly Tracker</h2>
        <ul>
          {weeklyTasks.map((t) => (
            <li key={t.id} style={{ color: t.completed ? "green" : "black" }}>
              {t.text} ({t.date})
            </li>
          ))}
        </ul>

        <h2>🗓️ Monthly Tracker</h2>
        <ul>
          {monthlyTasks.map((t) => (
            <li key={t.id} style={{ color: t.completed ? "blue" : "black" }}>
              {t.text} ({t.date})
            </li>
          ))}
        </ul>
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
    backgroundColor: "#fdfdfd",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "30px",
    marginBottom: "20px",
    textAlign: "center",
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
  task: {
    fontSize: "18px",
    marginBottom: "10px",
    cursor: "pointer",
  },
  tracker: {
    marginTop: "40px",
  },
};

export default Home;