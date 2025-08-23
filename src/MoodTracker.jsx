/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😠", label: "Angry" },
  { emoji: "😌", label: "Calm" },
  { emoji: "😕", label: "Confused" },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodLog, setMoodLog] = useState([]);

  // Load saved moods from localStorage
  useEffect(() => {
    const storedLog = JSON.parse(localStorage.getItem("moodLog")) || [];
    setMoodLog(storedLog);
  }, []);

  // Save moods to localStorage whenever moodLog changes
  useEffect(() => {
    localStorage.setItem("moodLog", JSON.stringify(moodLog));
  }, [moodLog]);

  const handleMoodSelect = (mood) => {
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    const newEntry = { date: today, mood };
    setMoodLog([newEntry, ...moodLog]);
    setSelectedMood(mood);
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.heading}>🧠 Mood Tracker</h2>

      {/* Mood Buttons */}
      <div style={styles.moodGrid}>
        {moods.map((m) => (
          <button
            key={m.label}
            style={{
              ...styles.moodButton,
              backgroundColor:
                selectedMood?.label === m.label ? "#bae6fd" : "#e0f2fe",
              border:
                selectedMood?.label === m.label
                  ? "2px solid #0284c7"
                  : "1px solid transparent",
            }}
            onClick={() => handleMoodSelect(m)}
          >
            <span style={{ fontSize: "28px" }}>{m.emoji}</span>
            <p style={styles.label}>{m.label}</p>
          </button>
        ))}
      </div>

      {/* Current Mood Message */}
      {selectedMood && (
        <p style={styles.currentMood}>
          You’re feeling <b>{selectedMood.label}</b> today {selectedMood.emoji}
        </p>
      )}

      {/* Mood Log */}
      <div style={styles.log}>
        <h3 style={styles.logTitle}>Recent Moods</h3>
        {moodLog.length === 0 ? (
          <p style={{ fontSize: "14px", color: "#555" }}>No moods logged yet.</p>
        ) : (
          <ul>
            {moodLog.map((entry, index) => (
              <li key={index} style={styles.logItem}>
                <span style={{ color: "#0284c7", fontWeight: "bold" }}>
                  {entry.date}
                </span>
                : {entry.mood.emoji} {entry.mood.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  card: {
    padding: "30px",
    borderRadius: "16px",
    backgroundColor: "#f0f9ff",
    boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
    textAlign: "center",
    marginBottom: "30px",
    maxWidth: "400px",
    margin: "auto",
  },
  heading: {
    fontSize: "26px",
    marginBottom: "20px",
    color: "#0369a1",
  },
  moodGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
    marginBottom: "20px",
  },
  moodButton: {
    padding: "14px",
    backgroundColor: "#e0f2fe",
    border: "1px solid transparent",
    borderRadius: "12px",
    cursor: "pointer",
    width: "80px",
    transition: "all 0.2s ease-in-out",
  },
  label: {
    fontSize: "14px",
    marginTop: "5px",
  },
  currentMood: {
    fontSize: "16px",
    marginTop: "10px",
    color: "#0c4a6e",
  },
  log: {
    textAlign: "left",
    marginTop: "20px",
  },
  logTitle: {
    fontSize: "18px",
    color: "#0369a1",
    marginBottom: "10px",
  },
  logItem: {
    fontSize: "15px",
    marginBottom: "6px",
  },
};

export default MoodTracker;
