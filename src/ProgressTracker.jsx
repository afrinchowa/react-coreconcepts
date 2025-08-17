import React, { useState } from "react";

const ProgressTracker = () => {
  const [progress, setProgress] = useState(40); // default 40%

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>📊 Progress Tracker</h3>
      <div style={styles.progressBar}>
        <div
          style={{
            ...styles.progressFill,
            width: `${progress}%`,
          }}
        ></div>
      </div>
      <p style={styles.text}>{progress}% Completed</p>

      <div style={styles.buttons}>
        <button onClick={() => setProgress(Math.max(0, progress - 10))}>
          ➖ Decrease
        </button>
        <button onClick={() => setProgress(Math.min(100, progress + 10))}>
          ➕ Increase
        </button>
      </div>
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
    textAlign: "center",
  },
  title: {
    fontSize: "18px",
    marginBottom: "12px",
  },
  progressBar: {
    width: "100%",
    height: "20px",
    backgroundColor: "#e5e7eb",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "10px",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#3b82f6",
    transition: "width 0.3s ease-in-out",
  },
  text: {
    margin: "5px 0",
    fontWeight: "500",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
};

export default ProgressTracker;
