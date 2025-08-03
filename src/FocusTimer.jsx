import React, { useState, useEffect } from "react";

const FocusTimer = () => {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      alert("🎉 Time's up! Take a break.");
      setIsActive(false);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(1500);
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>⏳ Focus Timer</h2>
      <p style={styles.time}>{formatTime(timeLeft)}</p>
      <div style={styles.controls}>
        <button onClick={() => setIsActive(!isActive)} style={styles.button}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset} style={styles.reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    padding: "30px",
    borderRadius: "12px",
    background: "#fff3cd",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    marginBottom: "30px",
  },
  title: {
    fontSize: "22px",
    marginBottom: "10px",
    color: "#856404",
  },
  time: {
    fontSize: "48px",
    margin: "20px 0",
    fontWeight: "bold",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  reset: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default FocusTimer;
