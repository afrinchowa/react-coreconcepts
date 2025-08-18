import React, { useState } from "react";

const HabitTracker = () => {
  const [habits, setHabits] = useState([
    { id: 1, text: "💻 Code for 1 hour", done: false },
    { id: 2, text: "📖 Read 10 pages", done: false },
    { id: 3, text: "🏃‍♂️ Exercise", done: false },
  ]);

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, done: !habit.done } : habit
      )
    );
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>🌱 Habit Tracker</h3>
      <ul style={styles.list}>
        {habits.map((habit) => (
          <li
            key={habit.id}
            style={{
              ...styles.item,
              textDecoration: habit.done ? "line-through" : "none",
              color: habit.done ? "#6b7280" : "#111827",
            }}
            onClick={() => toggleHabit(habit.id)}
          >
            <input
              type="checkbox"
              checked={habit.done}
              onChange={() => toggleHabit(habit.id)}
              style={styles.checkbox}
            />
            {habit.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    margin: "20px auto",
  },
  title: {
    fontSize: "18px",
    marginBottom: "12px",
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px 0",
    cursor: "pointer",
    fontSize: "16px",
  },
  checkbox: {
    transform: "scale(1.2)",
  },
};

export default HabitTracker;
