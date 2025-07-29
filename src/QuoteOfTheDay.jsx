/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        setQuote(`${data.content} — ${data.author}`);
      } catch (error) {
        setQuote("Stay positive. Work hard. Make it happen. 💪");
      }
    };

    fetchQuote();
  }, []);

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>💬 Quote of the Day</h2>
      <p style={styles.text}>{quote}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#f0f4ff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    marginBottom: "30px",
    textAlign: "center",
  },
  title: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#333",
  },
  text: {
    fontSize: "16px",
    fontStyle: "italic",
    color: "#555",
  },
};

export default QuoteOfTheDay;
