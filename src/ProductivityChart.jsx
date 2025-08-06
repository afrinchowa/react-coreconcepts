import React from "react";

const ProductivityChart = () => {
  // Fake weekly productivity data (hours)
  const data = [
    { day: "Mon", hours: 4 },
    { day: "Tue", hours: 6 },
    { day: "Wed", hours: 3 },
    { day: "Thu", hours: 7 },
    { day: "Fri", hours: 5 },
    { day: "Sat", hours: 2 },
    { day: "Sun", hours: 0 },
  ];

  const maxHours = 8;

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>📊 Weekly Productivity (Hours)</h3>
      <div style={styles.chart}>
        {data.map((entry) => (
          <div key={entry.day} style={styles.barGroup}>
            <div
              style={{
                ...styles.bar,
                height: `${(entry.hours / maxHours) * 100}%`,
              }}
            />
            <span style={styles.label}>{entry.day}</span>
          </div>
        ))}
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
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    fontSize: "18px",
    color: "#333",
  },
  chart: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: "150px",
    gap: "8px",
  },
  barGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  bar: {
    width: "30px",
    backgroundColor: "#4f46e5",
    borderRadius: "6px 6px 0 0",
    transition: "0.3s ease",
  },
  label: {
    marginTop: "8px",
    fontSize: "14px",
    color: "#666",
  },
};

export default ProductivityChart;
