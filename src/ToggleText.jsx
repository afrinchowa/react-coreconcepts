import React, { useState } from "react";

function ToggleText() {
  // This state controls whether the text is visible or hidden
  const [isVisible, setIsVisible] = useState(false);

  // Toggle the state between true and false
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={containerStyle}>
      <h2>🙈 Toggle Secret Message</h2>

      <button onClick={handleToggle} style={buttonStyle}>
        {isVisible ? "Hide" : "Show"} Message
      </button>

      {/* Conditional Rendering */}
      {isVisible && (
        <p style={{ marginTop: "20px", fontSize: "20px", color: "#555" }}>
          🎉 Surprise! You're doing great, keep learning!
        </p>
      )}
    </div>
  );
}

const containerStyle = {
  textAlign: "center",
  marginTop: "60px",
  padding: "20px",
  border: "2px dashed #aaa",
  borderRadius: "10px",
  backgroundColor: "#f9f9f9"
};

const buttonStyle = {
  padding: "10px 25px",
  fontSize: "16px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

export default ToggleText;
