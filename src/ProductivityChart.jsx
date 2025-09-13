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
            <span style={styles.value}>{entry.hours}</span>
            <div
              style={{
                ...styles.bar,
                height: `${(entry.hours / maxHours) * 100}%`,
                background: entry.hours
                  ? "linear-gradient(180deg, #6366f1, #4f46e5)"
                  : "#e5e7eb",
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
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "500px",
    margin: "auto",
  },
  title: {
    marginBottom: "20px",
    fontSize: "20px",
    fontWeight: "600",
    color: "#1f2937",
  },
  chart: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: "180px",
    gap: "12px",
  },
  barGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    position: "relative",
  },
  bar: {
    width: "80%",
    borderRadius: "8px 8px 0 0",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  value: {
    fontSize: "12px",
    color: "#374151",
    marginBottom: "4px",
  },
  label: {
    marginTop: "6px",
    fontSize: "14px",
    color: "#6b7280",
  },
};

export default ProductivityChart;
