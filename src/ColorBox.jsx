import React, { useState } from "react";

function ColorBox() {
  const [bgColor, setBgColor] = useState("#ffffff");

  // Function to generate a random hex color
  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div style={{ ...containerStyle, backgroundColor: bgColor }}>
      <h2>🎨 Random Color Generator</h2>

      <button onClick={generateRandomColor} style={buttonStyle}>
        🎲 Change Background
      </button>

      <p style={textStyle}>Current Color: <strong>{bgColor}</strong></p>
    </div>
  );
}

const containerStyle = {
  padding: "40px",
  borderRadius: "12px",
  textAlign: "center",
  marginTop: "50px",
  transition: "background-color 0.5s ease",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const textStyle = {
  marginTop: "20px",
  fontSize: "18px",
  color: "#333",
};

export default ColorBox;
