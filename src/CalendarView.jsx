import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarView = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📅 Calendar View</h2>
      <Calendar onChange={setDate} value={date} />
      <p style={styles.dateText}>
        Selected Date: <strong>{date.toDateString()}</strong>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  dateText: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#444",
  },
};

export default CalendarView;
